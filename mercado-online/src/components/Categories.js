import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../assets/styles';

const Categories = () => {

  return (
    <TouchableOpacity style={{ ...styles.box, width: "40%", borderBottomRightRadius: 50, borderTopLeftRadius: 50 }}>
      <View style={{ margin: 5, height: 80, width: 80, borderRadius: 20, backgroundColor: "#F1FA3C" }} />
      <View style={{ padding: 10 }}>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0EC23E" }}>Categoria 1</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default Categories;