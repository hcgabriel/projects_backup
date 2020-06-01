// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto1 from '../assets/img/foto20.jpeg';
import foto2 from '../assets/img/foto21.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }} contentContainerStyle={{ alignItems: 'center' }} >
      <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18 }} >SÃO JOSÉ, ROGAI POR NÓS</Text>

      <Image source={foto1} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        "O amor não se prova com abraço, não se prova com beijo, não se prova com relação sexual, os animais também fazem
        isso e eles não se amam. O amor se prova com três coisas: tempo, distância e sacrifício. O verdadeiro amor sabe 
        resistir ao tempo. O amor sabe guardar a distância física para unir as almas! O amor sabe abster-se de prazer
        por causa do outro! Isso é uma prova de amor" Padre Luiz Lodi.
        </Text>

      <Image source={foto2} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />
      
      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        *A quantidade de telas tem um significado. Santo Antônio, rogai por nós.
        </Text>
      <Ionicons name="md-heart" size={220} color="white" />
      <View style={{ marginBottom: 100 }} />

    </ScrollView>
  );
}

export default Cinco;