// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto1 from '../assets/img/foto19.jpeg';
import foto2 from '../assets/img/foto6.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }} contentContainerStyle={{ alignItems: 'center' }} >
      <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18 }} >O AMOR NÃO É TEMPORAL - PT2</Text>

      <Image source={foto1} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Eu não imaginava que algo que eu diria seria lembrado por mim, um ano depois, de uma forma tão especial. Hoje eu
        tenho o coração abrasado diante de algo que disse, que lembrei, AFINAL EU LEMBREI QUE HOJE ERA O DIA 23 DE MARÇO,
        e que somente hoje eu percebo que se realiza. Eu não havia sofrido por você aquilo que era da Vontade de Deus.
        Mas logicamente, uma centelha de amor já existia. Hoje sofremos uma cruz que não foi uma opção nossa, mas que
        certamente era o desejo do nosso coração carregá-la. E o Nosso Senhor nos amou tanto que nos deu essa graça, carregar
        uma Cruz Querida, mas não escolhida, e sim imposta.
        </Text>

      <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }} > SE TU QUERES, JESUS, EU TAMBÉM QUERO </Text>

      <Image source={foto2} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />

      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Nunca imaginei amar alguém por tanto tempo. Mas quando esse alguém foi criado por Dona Vanda e Seu Marcelo, fica fácil.
        Brincadeira, fica fácil não, mas já ajuda. Afinal, amar não é uma tarefa fácil. Por nossa culpa, claro. Seus pais têm 
        um papel determinante em nossa situação atual, de uma maneira extremamente positiva, claro! Agradeça imensamente a 
        Deus pelos pais que você tem. Eu digo sem sombra de dúvidas que nunca fui tão feliz pelos possíveis sogros que um 
        dia posso ter. Louvado seja Deus pela amizade dos seus pais e familiares.
        </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Onze')} style={{ width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Cinco;