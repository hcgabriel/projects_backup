import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import EmailCheck from './src/screens/EmailCheck';
import LocalCheck from './src/screens/LocalCheck';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';

const App = () => {

  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;