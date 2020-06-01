import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/storage';
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
  console.log('Firebase inicializado')
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
  }
}

const firebaseApp = firebase;

const App = () => {

  const [livros, setLivros] = useState([]);
  const [foto, setFoto] = useState(null);
  const [novoLivro, setNovoLivro] = useState({
    nome: '',
    autor: '',
    status: '',
    foto: null
  });
  const [porcentagemDoCarregamento, setPorcentagemDoCarregamento] = useState(0);

  useEffect(() => {
    console.log('Carregou a aplicação...');
  }, []);

  useEffect(() => {
    console.log('Alteração em livros...');
  }, [livros]);

  const adicionarLivro = async (livro) => {
    livro.dono = 'Caio';
    console.log('\nLivro sendo adicionado:', livro)
    let livros = firebaseApp.database().ref('biblioteca/livros');
    let chave = (await livros.push()).key;
    livros.child(chave).set(livro);

    //salvando imagem
    let type = 'image/jpeg';
    let img = firebaseApp.storage().ref().child('imagens/livros').child(chave);
    let blob = await services.uri_para_blob(livro.foto);
    img.put(blob, { contentType: type })
      .on('state_changed', async (snapshot) => {
        let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setPorcentagemDoCarregamento(pct);
      }, (erro) => {
        console.log('erro:', erro);
      }, async () => {
        console.log('url: ', await img.getDownloadURL())
        livros.child(chave).set({ ...livro, foto: await img.getDownloadURL() })
        alert('Imagem salva com sucesso!');
        setNovoLivro({});
      });
    // .then( async (url) => {
    //   console.log('url: ', await img.getDownloadURL())
    //   livros.child(chave).set({ ...livro, foto: await img.getDownloadURL() })
    //   alert('Imagem salva com sucesso!');
    // })
    // .catch(e => console.log('erro: ', e))

  };

  const pegarFoto = async () => {

    try {

      let res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true
      });

      // res.uri = res.uri.replace('file://', '');
      if (!res.cancelled) setNovoLivro({ ...novoLivro, foto: res.uri });
      // console.log('res: ', res);
      console.log('foto: ', novoLivro.foto)

    } catch (error) {
      console.log('erro')
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.card_add_livro}>
        <TextInput style={styles.input} value={novoLivro.nome} onChange={(e) => { setNovoLivro({ ...novoLivro, nome: e.nativeEvent.text }) }} placeholder="Digite o nome do livro..." />
        <TextInput style={styles.input} value={novoLivro.autor} onChange={(e) => { setNovoLivro({ ...novoLivro, autor: e.nativeEvent.text }) }} placeholder="Digite o autor do livro..." />
        <TextInput style={styles.input} value={novoLivro.status} onChange={(e) => { setNovoLivro({ ...novoLivro, status: e.nativeEvent.text }) }} placeholder="Digite o status do livro..." />
        <Button style={styles.btn} onPress={async () => { await pegarFoto(); }} title="PEGAR FOTO" />
        {novoLivro && <Image source={{ uri: novoLivro.foto }} style={styles.nova_foto} />}
        <Button style={styles.btn} onPress={() => { adicionarLivro(novoLivro) }} title="ADICIONAR LIVRO" />
        <Text>{porcentagemDoCarregamento && (porcentagemDoCarregamento == 100) ? 'Livro salvo com sucesso!' : porcentagemDoCarregamento+'%' } </Text>
        <View style={{ width: porcentagemDoCarregamento+'%', height: 10, backgroundColor: '#FF0000'}}></View>
      </View>
    </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'

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

export default App;
