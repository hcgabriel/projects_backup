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

const Login = ({navigation: {navigate}}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Image source={logo} />

        <Text style={styles.txt1}>Faça login no Porto Online</Text>

        <Text style={styles.txt2}>LOGIN</Text>
        <TextInput style={styles.input1} placeholder="Digite seu login" />

        <Text style={styles.txt2}>SENHA</Text>
        <TextInput style={styles.input1} placeholder="Digite sua senha" />

        <Text style={{...styles.txt1, marginBottom: 15}}>
          Esqueceu sua senha? Clique aqui para recuperar
        </Text>

        <TouchableOpacity style={styles.btn1} onPress={() => navigate('Home')}>
          <Text style={styles.btnTxt1}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigate('Cadastro')}>
          <Text style={styles.btnTxt2}>NÃO SOU CADASTRADO</Text>
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

export default Login;
