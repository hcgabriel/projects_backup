// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto1 from '../assets/img/foto5.jpeg';
import foto2 from '../assets/img/foto9.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }} contentContainerStyle={{ alignItems: 'center' }} >
      <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18 }} > E PARA TERMINAR...</Text>

      <Image source={foto1} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Eu já falei muito. Porém, como você sabe, eu sempre falo muito e se deixar eu não paro. Mas agora percebo que é 
        o momento de apenas meditarmos essa realidade toda. Pouco mais de um ano de que nos conhecemos. Quantas coisas 
        vivemos, quantas coisas sofremos, quantas vezes sorrimos, mas em especial, quantas vezes e de quantas formas o 
        Senhor nos mostrou o quanto nos ama! Bom Senhor. Bom Pastor. Deixo aqui as palavras de Santo Agostinho e do Cardeal
        Fulton Sheen:
        </Text>
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Os esposos, renunciando aos seus direitos recíprocos, não destroem a essência do matrimônio, pois, 
        como diz Santo Agostinho: "A base dum casamento de amor é a união dos corações".
        </Text>

      <Image source={foto2} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />

      <TouchableOpacity onPress={() => navigation.navigate('Doze')} style={{ width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Cinco;