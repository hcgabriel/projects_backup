// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';

const Dois = ({ navigation }) => {

  return (
    <View style={{...styles.container, backgroundColor: 'red'}}>
      <Ionicons name="md-warning" size={220} color="white" />
      <Text style={{ color: "#FFFFFF", fontSize: 40, margin: 5, textAlign: "center" }}>ERRO</Text>
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>Foi encontrado um problema no seu smartphone: você está pesada demais para aprender receita de sorvete. Mas temos a solução para lhe salvar!</Text>
      <TouchableOpacity onPress={ () => navigation.navigate('Tres') } style={{ position: "absolute", bottom: 0, width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>ME SALVA!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Dois;