import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from '../assets/styles';

const Register = () => {

  return (
    <View style={{ ...styles.container, backgroundColor: "#FFFFFF", justifyContent: "flex-start" }}>
      <View style={styles.headerOne}>
        <Text style={{ ...styles.logo, width: "100%", fontSize: 36 }}>cadastro</Text>
      </View>
      <View style={{ ...styles.loginBoxTwo, marginTop: 5 }}>
        <TextInput style={styles.inputTwo} placeholder="Nome" />
        <TextInput style={styles.inputTwo} placeholder="Sobrenome" />
        <TextInput style={styles.inputTwo} placeholder="Telefone" />
        <TextInput style={styles.inputTwo} placeholder="E-mail" />
        <TextInput style={styles.inputTwo} placeholder="Usuário" />
        <TextInput style={styles.inputTwo} placeholder="Senha" />
      </View>

      <TouchableOpacity style={styles.btnThree}>
        <Text style={styles.btnTextThree}>continuar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Register;