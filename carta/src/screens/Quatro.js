// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import parabens from '../assets/img/parabens.jpeg';

const Dois = ({ navigation }) => {

  return (
    <View style={{...styles.container, backgroundColor: '#141414'}}>
    <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18 }} >AGORA VAI</Text>
      <Image source={parabens} style={{ margin: 10, borderRadius: 300,  }} width={300} height={300} />
      <TouchableOpacity onPress={ () => navigation.navigate('Cinco')} style={{ position: "absolute", bottom: 0, width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Dois;