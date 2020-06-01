// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto1 from '../assets/img/foto14.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }} contentContainerStyle={{ alignItems: 'center'}} >
      <Image source={foto1} style={{ margin: 10, borderRadius: 100,  }} width="80%" height={400} />
      
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Essa imagem significa muito para mim. Santo Antônio me escolheu. Ele me colocou nos braços, como o Menino Jesus, 
        e me salvou de uma doença física nos primeiros momentos de minha vida. Hoje vejo que ele já me salvou de muitas 
        outras doenças físicas e - principalmente - espirituais. Vivo hoje o maior deserto de minha vida, sem dúvidas, mas pela primeira
         vez eu tenho um Norte. Não um Norte que eu escolhi, mas mais uma vez Santo Antônio me escolheu. Maria Catharina me 
         deu a data de 12 de Junho como o meu Norte. A minha linha de chegada e ao mesmo tempo o meu ponto de partida. 
         Não sei o que acontecerá daqui para lá e muito menos como será depois. Porém, sem pressa (mais um milagre de Santo Antônio), 
         e sem expectativas, aqui estou eu! O Senhor é o Pastor que me conduz, não me falta coisa alguma.
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Oito')} style={{ width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Cinco;