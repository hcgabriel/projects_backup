import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from '../assets/styles';

const LocalCheck = () => {

  return (
    <View style={{ ...styles.container }}>

      <View style={{ padding: 10, margin: 10, alignItems: "center", justifyContent: "center" }}>
        <MaterialIcons style={{ marginBottom: 50 }} name="location-on" size={135} color="#F1FA3C" />
        <Text style={{ margin: 5, fontSize: 26, color: "#F1FA3C" }}>permitir localização </Text>
        <Text style={{ margin: 5, textAlign: "center", color: "#F1FA3C" }}>Agora para que tudo funcione perfeitamente precisamos usar a sua localização. Portanto, permita que tenhamos acesso a ela.</Text>
      </View>

      <TouchableOpacity style={styles.btnThree}>
        <Text style={styles.btnTextThree}>permitir</Text>
      </TouchableOpacity>

    </View>
  );
}

export default LocalCheck;