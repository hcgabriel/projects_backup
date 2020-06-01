import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import logo from '../assets/images/Logotipo.png';

const Login = () => {

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={{ ...styles.loginBox }}>
        <TextInput style={styles.inputOne} placeholder="E-mail ou Usuário" />
        <TextInput style={styles.inputOne} placeholder="Senha" />
        <View style={{ flexDirection: "row", wrap: "no-wrap", marginVertical: 30 }}>
          <TouchableOpacity style={styles.btnOne}>
            <Text style={styles.btnTextOne} >Login</Text>
          </TouchableOpacity>
          <View style={{ width: "50%" }}>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btnTwo}>
        <Ionicons style={{ marginHorizontal: 10 }} name="logo-google" size={20} color="#999999" />
        <Text style={styles.btnTextTwo} >Logar com o Google</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 10, alignItems: "center" }}>
        <Text style={{ color: "#FFFFFF" }}>Ainda não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#F1FA3C", textDecorationLine: "underline", textDecorationColor: "#F1FA3C", textDecorationStyle: "dotted" }} >Inscreva-se agora!</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Login;