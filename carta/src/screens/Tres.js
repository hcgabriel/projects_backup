// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';

const Dois = ({ navigation }) => {

  return (
    <View style={{...styles.container, backgroundColor: 'yellow'}}>
      <Ionicons name="md-alert" size={220} color="#333" />
      <Text style={{ color: "#333", fontSize: 30, margin: 5, textAlign: "center" }}>ATENÇÃO</Text>
      <Text style={{ color: "#333", fontSize: 16, margin: 5, textAlign: "center" }}>Só continue se você estiver disposta a largar seu sedentarismo, sono excessivo, adormecimentos repentinos no sofá da sala, preguiça de subir a escada, média de 0,5 banho por dia, viagens à sua terra imaginária em meio a conversas importantes, etc</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Quatro')} style={{ position: "absolute", bottom: 0, width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CORAGEM É MEU SOBRENOME!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Dois;