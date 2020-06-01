// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto1 from '../assets/img/foto19.jpeg';
import foto2 from '../assets/img/foto15.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }} contentContainerStyle={{ alignItems: 'center' }} >
      <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18 }} >O AMOR NÃO É TEMPORAL</Text>

      <Image source={foto1} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Eu sempre achei que leva muito tempo para que você possa dizer que conhece alguém. Existem muitos fatores que
        pdoem atrasar ou apressar esse processo, mas tenho certeza de que ele não é nada rápido. Muito pelo contrário.
        Porém, um cristal não esconde nada. Ele brilha. Ele é transparente. Ele é aquilo que é. Sem rodeios, sem enrolações,
        sem enganações, sem mentira. Um cristal é o que é. E você é, certamente, um cristal. Por mais que hoje eu não te conheça
        tanto quanto queria, sei que conheço o bastante para saber o quanto és preciosa. Existe até uma pedra preciosa que se parece
        com seu apelido: Rubi/Mabi. Hehehehehe.
        </Text>
      <Image source={foto2} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />

      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Não imaginava que conheceria uma pequena grande, como Santa Terezinha. Que mulher tu és. Não digo simplesmente um elogio, 
        seria vão ficar elogiando você o tempo inteiro se isso não tivesse um sentido por trás. É uma constatação de como Nosso Senhor 
        é Misericordioso conosco e lapida esse diamante que tu és. Sim, já te comparei a várias pedras preciosas, mas certamente 
        nunca alcançarei aquilo que verdadeiramente só o Senhor sabe que tu és. Quão preciosa é a obra de Deus. Nunca pensei que 
        você estaria ao meu lado nos momentos mais difíceis que já passei, como a morte da minha avó e outras situações difíceis 
        que eu vivi e você estava do meu lado, ligando para mim, mandando mensagem e principalmente em oração pelo que eu vivia.
        Tenho certeza que você é uma das pessoas que mais rezou por mim, de várias formas, em toda a minha vida. Não tenho dúvidas. 
        E você me entende quando digo "rezou". Hoje eu tirei um tempo para meditar essa data e acabei lendo algumas conversas antigas nossas.
        Vi o quanto eu fui imaturo, fraco, pequeno, grosso, rude, chato, criança, negligente e várias outras coisas, ruins, com você. 
        Ao mesmo tempo eu vejo o quanto você foi virtuosa em suas atitudes para comigo. Meu Senhor, quão grande foi e é a minha 
        ingratidão diante de tamanha bondade. Como o Senhor te usou para ser, para mim, o Seu Consolo. Quantas vezes eu fiz
        a tua Cruz ser mais pesada, ao invés de ajudá-la a carregar. Não entendi muitas vezes o seu momento, o seu tempo, 
        a sua situação e acabei não sendo aquilo que deveria. Como o Senhor foi e é misericordioso de permitir a tua estadia 
        em minha vida, em meu coração. Te agradeço por ter sido uma mulher de verdade e sustentado tantas coisas por mim e principalmente pelo
        Nosso Senhor Jesus Cristo. Agradeço mais a Ele, é claro, por proporcionar a minha vida algo que eu nunca imaginei. Só para te dar um exemplo, 
        eu nunca imaginei que algo que eu faria marcaria positivamente a vida de alguém que eu amo por tanto tempo como a data em que 
        eu disse pela primeira vez que eu a amo. Que bênção divina.
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dez')} style={{ width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Cinco;