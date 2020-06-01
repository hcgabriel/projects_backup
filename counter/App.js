import React, { useState} from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';

export default function App() {

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('key1', 'value1');
    } catch (error) {
      
    }
  }

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('key1');
      if(value) console.log(value);
      else console.log('no data')
    } catch (error) {
      
    }
  }

  const [clicks, setClicks] = useState(0);

  const click = () => {
    setClicks(clicks + 1);
  }

  retrieveData();
  // storeData();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={click} style={{ width: 200, height: 200, backgroundColor: 'red', borderRadius: 100 }}>

      </TouchableOpacity>
      <Text> Counter: {clicks} </Text>
    </View>
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
