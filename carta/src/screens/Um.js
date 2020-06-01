// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';

const Um = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Ionicons name="md-ice-cream" size={220} color="white" />
      <Text style={{ color: "#FFFFFF", fontSize: 30, margin: 5, textAlign: "center" }}>iCeCream</Text>
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>A rede social dos amantes de sorvete. Aprenda a criar o seu!</Text>
      <TouchableOpacity onPress={ () => navigation.navigate('Dois') } style={{ position: "absolute", bottom: 0, width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>QUERO APRENDER</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Um;