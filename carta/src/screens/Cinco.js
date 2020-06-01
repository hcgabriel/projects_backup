// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto8 from '../assets/img/foto8.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }}  contentContainerStyle={{ alignItems: 'center'}} >
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Logicamente você já percebeu que isso aqui não é um aplicativo para um cliente meu...
        Pois é, Maria Beatriz... parece que hoje é um dia bem importante. Talvez o momento que estamos vivendo
        não nos permita dizer, fazer e viver o que gostaríamos agora. Porém, certamente vivemos hoje o que Deus quer!
        Desde o início de tudo eu fui muito temeroso de não fazer a vontade de Deus, na verdade eu temo muito isso -
        louvado seja Deus por esse temor. Talvez esse temor tenha sido um dos motivos da fulga de São José para o
        Egito com o Menino Deus e Sua Mãe Santíssima. Mas como você me mandou - e eu devo, de fato - aprender muito
        com o Glorioso São José, aqui estou imitando, ou pelo menos tentando imitar, o seu abandono à Divina Providência.
        Quem escuta a voz do Pastor não quer voltar atrás. Quem ouve o chamado do Altíssimo e o reconhece, nada mais
        deseja. Quem a Deus tem, nada lhe falta - Deus é e basta. Estou vivendo algo que eu realmente nunca pensei que
        viveria. Primeiro me vejo num dos maiores dilemas que eu já enfrentei. Não de sentimento, mas um dilema racional
        e espiritual. Posteriormente, sou colocado diante de mim mesmo para discernir o que é realmente que eu e, principalmente,
        o Senhor desejamos para os meus dias nessa noite mal dormida que é a nossa vida.
        Vivemos dois exílios ao mesmo tempo. Difíceis para todos. Porém, olhe para nós e veja como somos amados por Deus.
        Em pouco mais de um ano de conhecimento, somos postos pelo Nosso Senhor em um exílio do mundo e um exílio de nós mesmos.
        Duas pessoas que tem o Toque como uma de suas mais perceptíveis linguagens do amor, afastadas fisicamente uma da outra.
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Seis')} style={{ width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Cinco;