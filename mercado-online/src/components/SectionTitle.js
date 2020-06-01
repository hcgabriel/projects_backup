import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../assets/styles';

const SectionTitle = (props) => {
  console.log(props)

  return (
    <View style={{ flexDirection: "row", paddingLeft: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 20, color: "#555" }}>{props.title}</Text>
      <View style={{ width: "70%" }} />
    </View>);
}

export default SectionTitle;