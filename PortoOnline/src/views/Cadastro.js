/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import logo from '../assets/img/logo-1.png';

const Cadastro = ({navigation: {navigate}}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
          {/* <Text style={{...styles.txt2, width: '20%'}}>{'< '}Voltar</Text> */}
          <Image source={logo} />
        </View>

        <Text style={styles.txt1}>Cadastre-se no Porto Online</Text>

        <Text style={styles.txt2}>NOME</Text>
        <TextInput style={styles.input1} placeholder="Digite seu nome" />

        <Text style={styles.txt2}>E-MAIL</Text>
        <TextInput style={styles.input1} placeholder="Digite seu e-mail" />

        <Text style={styles.txt2}>SENHA</Text>
        <TextInput style={styles.input1} placeholder="Digite sua senha" />

        <Text style={styles.txt2}>CONFIRMAR SENHA</Text>
        <TextInput
          style={styles.input1}
          placeholder="Digite sua senha novamente"
        />

        <TouchableOpacity style={styles.btn1} onPress={() => navigate('Home')}>
          <Text style={styles.btnTxt1}>CADASTRAR</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  txt1: {
    color: '#7F7F7F',
    fontSize: 14,
    marginTop: 5,
  },
  txt2: {
    color: '#15D4E5',
    fontSize: 16,
    width: '90%',
    textAlign: 'left',
  },
  input1: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  btn1: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#15D4E5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
  },
  btnTxt1: {
    color: '#FFF',
  },
  btn2: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#15D4E5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
  },
  btnTxt2: {
    color: '#15D4E5',
  },
});

export default Cadastro;
