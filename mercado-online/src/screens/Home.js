import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../assets/styles';

import Offer from '../components/Offer';
import Featured from '../components/Featured';
import Categories from '../components/Categories';
import SectionTitle from '../components/SectionTitle';

const Home = () => {

  return (
    <View style={{ ...styles.container, backgroundColor: "#FFFFFF", justifyContent: "flex-start" }}>
      <View style={styles.headerTwo}>
        <Text style={{ fontSize: 16, color: "#F1FA3C" }}>olá, usuário</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginHorizontal: 5, height: 50, width: 50, borderRadius: 20, backgroundColor: "#F1FA3C" }} />
          <View style={{ marginHorizontal: 5, height: 50, width: 50, borderRadius: 20, backgroundColor: "#F1FA3C" }} />
        </View>
      </View>

      <ScrollView style={{ width: "100%", height: "100%" }}>

      <SectionTitle title="promoções"/>

        <ScrollView horizontal style={{ width: '100%', height: 120 }}>
          <Offer />
          <Offer />
          <Offer />
          <Offer />
        </ScrollView>

        <View style={{ marginTop: 10 }}>
        <SectionTitle title="destaque"/>

          <Featured />
          <Featured />
          <Featured />
          <Featured />
          <Featured />

          <SectionTitle title="categorias"/>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Categories />
            <Categories />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Categories />
            <Categories />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Categories />
            <Categories />
          </View>

        </View>


      </ScrollView>
    </View>
  );
}

export default Home;