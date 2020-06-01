import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';

import Offer from '../components/Offer';
import Featured from '../components/Featured';
import Markets from '../components/Markets';
import SectionTitle from '../components/SectionTitle';

const Home = () => {

  return (
    <View style={{ ...styles.container, backgroundColor: "#FFFFFF", justifyContent: "flex-start" }}>
      <View style={styles.headerTwo}>
        <Text style={{ fontSize: 16, color: "#F1FA3C" }}>olá, usuário</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons style={{ marginHorizontal: 5 }} name="md-menu" size={50} color="#F1FA3C" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 5 }} style={{ width: "100%", height: "100%" }}>

        <SectionTitle title="promoções do dia" />

        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: '100%', height: 120 }}>
          <Offer />
        </ScrollView>

        <View style={{ marginTop: 10 }}>
          <SectionTitle title="destaques" />

          <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: '100%', height: 120 }}>
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
          </ScrollView>

          <View style={{
            borderTopLeftRadius: 25, borderTopRightRadius: 25, width: '100%', backgroundColor: '#F0F0F0',
            paddingBottom: 20,
          }}>
            <SectionTitle title="supermercados" />
            <View style={{ marginBottom: 20, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <TouchableOpacity style={styles.btnFour}>
                <Text>Filtrar</Text>
              </TouchableOpacity>

              <View style={{
                backgroundColor: '#E5E5E5',
                borderRadius: 10,
                flexDirection: 'row',
                flexWrap: 'nowrap',
                height: 34,
                width: '50%',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <Ionicons style={{ marginLeft: 10 }} name="md-search" size={20} color="#8A8A8A" />
                <TextInput underlineColorAndroid="transparent" style={styles.inputThree} placeholder="Pesquisar" />
              </View>
            </View>
            <Markets />
            <Markets />
            <Markets />
            <Markets />
            <Markets />
          </View>
        </View>


        <View style={{ margin: 15, alignItems: "center" }}>
          <Text style={{ color: "#333" }}>Sentiu falta de algum supermercado?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#333", fontWeight: 'bold', textDecorationLine: "underline", textDecorationColor: "#333", textDecorationStyle: "dotted" }} >Sugerir Supermercado</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </View>
  );
}

export default Home;