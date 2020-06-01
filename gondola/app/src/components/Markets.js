import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from '../assets/styles';
import logo from '../assets/images/logo-supermercado.png';

const Markets = () => {

  return (
    <TouchableOpacity style={{ ...styles.box, height: 90, flexDirection: "row", justifyContent: 'space-evenly', width: "90%", borderRadius: 0, borderBottomLeftRadius: 25, paddingVertical: 0, paddingHorizontal: 5 }}>
      <Image source={logo} style={{ margin: 5, height: 52.5, width: 75 }} />
      <View style={{ padding: 5, borderLeftWidth: 1, height: '90%', borderLeftColor: '#F0F0F0', width: '60%' }}>
        <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: "300", color: '#333' }}>Supermercado Viza</Text>
        <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
          <FontAwesome name="star" size={20} color="#F1FA3C" />
          <Text style={{ color: '#F1FA3C', fontSize: 14, fontWeight: 'bold'}}>4,9</Text>
        </View>
        <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: "bold", color: '#333' }}>2 km</Text>
        <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: "bold", color: '#333' }}>60 - 70 min</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Markets;