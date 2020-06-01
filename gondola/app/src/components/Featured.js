import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import styles from '../assets/styles';

import imgCafe from '../assets/images/cafe.png';

const Featured = () => {

  return (
    <TouchableOpacity style={{...styles.box, margin: 5, height: 86, width: 135, borderRadius: 20, backgroundColor: "#FFF", alignItems: 'center', justifyContent: 'center' }}>
      <Image source={imgCafe} />
    </TouchableOpacity>
  );
}

export default Featured;