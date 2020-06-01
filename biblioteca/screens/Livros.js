import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as services from '../src/services/';

try {

  firebase.initializeApp({
    apiKey: "AIzaSyAI3m_dAGpP71m8EKslz-QJO-c_3TQDnuM",
    authDomain: "biblioteca-6963b.firebaseapp.com",
    databaseURL: "https://biblioteca-6963b.firebaseio.com",
    projectId: "biblioteca-6963b",
    storageBucket: "biblioteca-6963b.appspot.com",
    messagingSenderId: "875307453196",
    appId: "1:875307453196:web:dc0b12cd440058bbee9729",
    measurementId: "G-XZV414BNH0"
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
  }
}

const firebaseApp = firebase;

const ModalLivro = (props) => {

  // const [show, setShow] = useState(show);
  console.log('show: ', props.show);
  let show = props.show;

  useEffect(() => {
    console.log('Mudou o show... ', show)
  }, show)


  if (show)
    return (
      <View style={stylesModal.container}>
        <Text> {show == true && 'Modal'} {'\n\n\n\n'}</Text>
        <Button onPress={() => { console.log('show no btn: ', show); show = false }} title="FECHAR" />
      </View>
    );
  else return (
    <View />
  );


}

const stylesModal = StyleSheet.create({
  container: {
    flex: 1, /* Hidden by default */
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', /* Stay in place */
    zIndex: 1, /* Sit on top */
    // left: 0,
    // top: 0,
    width: '90%', /* Full width */
    height: '90%', /* Full height */
    overflow: 'visible', /* Enable scroll if needed */
    backgroundColor: '#000', /* Fallback color */
    backgroundColor: '#e3e3e3', /* Black w/ opacity */
  },
});


const Livros = () => {

  const [livros, setLivros] = useState([]);
  const [foto, setFoto] = useState(null);
  const [livro, setLivro] = useState({});
  const [porcentagemDoCarregamento, setPorcentagemDoCarregamento] = useState(0);
  const [modalVisivel, setModalVisivel] = useState(false);

  useEffect(() => {
    firebaseApp.database().ref('biblioteca/livros').on('value', async (snapshot) => {
      setLivros([]);
      snapshot.forEach(item => {
        setLivros(livros => [...livros, {
          chave: item.key,
          nome: item.val().nome,
          autor: item.val().autor,
          foto: item.val().foto,
          status: item.val().status,
          dono: item.val().dono
        }]);
      })
      // setLivros([snapshot.val()]);

    });

    console.log('Carregou a aplicação...');
  }, []);

  useEffect(() => {
    console.log('Alteração em livros...');
  }, [livros]);

  return (
    <View style={styles.container}>
      { modalVisivel ? <Button onPress={() => { console.log('btn fechar: ', modalVisivel); setModalVisivel(false) }} title="FECHAR" /> : null }
      <ModalLivro show={modalVisivel} />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.prateleira}>

        {livros && livros.map((livro) => {
          console.log(livro)
          let color = 'green';
          color = livro.status != 'disponível' ? 'red' : 'green';
          return (
            <TouchableOpacity onPress={() => {
              setLivro(livro);
              setModalVisivel(true);
            }} style={styles.livro} key={livro.chave} >
              <View style={{ marginHorizontal: 10, width: 90, height: 90, borderRadius: 10, backgroundColor: "#e3e3e3", alignItems: 'center', justifyContent: 'center' }}>
                {livro.foto && <Image source={{ uri: livro.foto }} style={styles.livro_foto} />}
              </View>
              <View>
                <Text style={styles.livro_nome} >{((livro.nome).length > 25) ? (((livro.nome).substring(0, 25 - 3)) + '...') : livro.nome}</Text>
                <Text style={styles.livro_autor}>{livro.autor}</Text>
                <Text style={styles.livro_autor}>Proprietário: {livro.dono}</Text>
                <Text style={{ ...styles.livro_autor, color: color }}>{livro.status}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  title: {
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1
  },
  btn: {
    margin: 3,
    padding: 3,

  },
  input: {
    margin: 3,
    padding: 3,
    width: '70%',
    height: 50,

  },
  prateleira: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  livro: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '94%',
    minWidth: 220,
    height: 100,
    margin: 3,
    padding: 5,
    borderWidth: 1,
    borderColor: '#eee',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#fff'
  },
  livro_nome: {
    color: '#333',
    fontSize: 16,

  },
  livro_autor: {
    color: '#333',
    fontSize: 14

  },
  nova_foto: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 5
  },
  livro_foto: {
    width: '100%',
    height: '100%',
    // margin: 10,
    borderRadius: 10
  },
  card_add_livro: {
    backgroundColor: '#fff',
    width: '90%',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  }
});

export default Livros;
