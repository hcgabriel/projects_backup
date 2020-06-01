import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import styles from '../assets/styles';

const EmailCheck = () => {

  return (
    <View style={{ ...styles.container }}>

      <View style={{ padding: 10, margin: 10, alignItems: "center", justifyContent: "center" }}>
        <FontAwesome style={{ marginBottom: 50}} name="envelope-o" size={100} color="#F1FA3C" />
        <Text style={{ margin: 5, fontSize: 26, color: "#F1FA3C" }}>confirme seu e-mail</Text>
        <Text style={{ margin: 5, textAlign: "center", color: "#F1FA3C" }}>Pronto!  Agora encaminhamos um email para você. Então preciso que de uma olhadinha lá e confirme clicando no link.
</Text>
      </View>

      <TouchableOpacity style={styles.btnThree}>
        <Text style={styles.btnTextThree}>continuar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default EmailCheck;