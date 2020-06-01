// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto1 from '../assets/img/foto1.jpeg';
import foto2 from '../assets/img/foto2.jpeg';
import foto3 from '../assets/img/foto3.jpeg';
import foto4 from '../assets/img/foto5.jpeg';
import foto11 from '../assets/img/foto11.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }}  contentContainerStyle={{ alignItems: 'center'}}  >
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Que presente mais belo. Que mimo do Nosso Senhor Jesus Cristo para esses dois pobres.
      </Text>
    <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }} >PAUSA NA SERIEDADE PARA BELAS IMAGENS</Text>
      
      <Image source={foto1} style={{ margin: 10, borderRadius: 100,  }} width={300} height={400} />
      <Image source={foto2} style={{ margin: 10, borderRadius: 100,  }} width={300} height={400} />
      <Image source={foto3} style={{ margin: 10, borderRadius: 100,  }} width={300} height={400} />
      <Image source={foto4} style={{ margin: 10, borderRadius: 100,  }} width={300} height={400} />
      <Image source={foto11} style={{ margin: 10, borderRadius: 100,  }} width={300} height={400} />
      
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Há um ano atrás eu te dizia o que hoje não posso mas digo sem querer. É estranho imaginar que três palavras possam 
        ser um marco tão importante na vida de uma pessoa e ainda mais na vida de duas pessoas. Muitas vezes não temos 
        noção do que fazemos e do impacto que isso gera em nossas vidas e na vida do outro, principalmente. Porém, 
        algumas dessas vezes nós nos arrependemos, principalmente quando se trata de amor. Eu já disse muitas coisas 
        a pessoas que eu acreditava amar, coisas bonitas, românticas, que qualquer pessoa poderia acreditar piamente 
        que se tratava de um verdadeiro amor. Mas eu digo sem sombre de dúvidas que quando disse, na maioria das vezes, 
        eu sequer sabia o que era amor. 
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sete')} style={{ width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Cinco;