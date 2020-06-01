import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from '../assets/styles';

const Login = () => {

  return (
    <View style={styles.container}>
      <Text style={{...styles.logo, marginTop: 30}}>gôndola</Text>
      <View style={{...styles.loginBox, marginTop: 50 }}>
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
        <Text style={styles.btnTextTwo} >Logar com o Google</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 100, marginBottom: 10, alignItems: "center" }}>
        <Text style={{ color: "#FFFFFF"}}>Ainda não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#F1FA3C", textDecorationLine: "underline", textDecorationColor: "#F1FA3C", textDecorationStyle: "dotted"}} >Inscreva-se agora!</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Login;