import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../assets/styles';

const Featured = () => {

  return (
    
    <TouchableOpacity style={{ ...styles.box, flexDirection: "row", width: "90%", borderBottomLeftRadius: 50 }}>
    <View style={{ margin: 5, height: 80, width: 80, borderRadius: 20, backgroundColor: "#F1FA3C" }} />
    <View style={{ padding: 10 }}>
      <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: "300" }}>Refrigerante 2L</Text>
      <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: "bold" }}>R$6,00</Text>
      <TouchableOpacity style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0EC23E" }}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
  );
}

export default Featured;