import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import logo from '../assets/images/Logotipo.png';

const Splash = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={logo} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#851DE0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});

export default Splash;
