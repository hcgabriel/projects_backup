/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import foto1 from '../assets/img/foto-1.png';
import icMenu from '../assets/img/ic-menu.png';
import icFilter from '../assets/img/ic-filter.png';
import icSearch from '../assets/img/ic-search.png';

const Item = () => {
  return (
    <>
      <View>
        <Text>lçskadçlka</Text>
      </View>
    </>
  );
};

const Home = ({navigation}) => {
  // console.log(navigation);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.header}>
          <Image source={icMenu} />
          <Text>Porto Online</Text>
          <Image source={icFilter} />
          <Image source={icSearch} />
        </View> */}
        <Button
          title="askldjas"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Item />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  header: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  txt1: {
    color: '#7F7F7F',
    fontSize: 14,
    marginTop: 5,
  },
  txt2: {
    color: '#15D4E5',
    fontSize: 16,
    width: '90%',
    textAlign: 'left',
  },
  input1: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  btn1: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#15D4E5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
  },
  btnTxt1: {
    color: '#FFF',
  },
  btn2: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#15D4E5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
  },
  btnTxt2: {
    color: '#15D4E5',
  },
});

export default Home;
