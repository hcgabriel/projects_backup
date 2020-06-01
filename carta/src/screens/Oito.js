// In App.js in a new project

import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles';
import foto1 from '../assets/img/foto10.jpeg';
import foto2 from '../assets/img/foto13.jpeg';

const Cinco = ({ navigation }) => {

  return (
    <ScrollView style={{ width: '100%', paddingTop: 50, backgroundColor: '#F66F66' }} contentContainerStyle={{ alignItems: 'center' }} >
      <Image source={foto1} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />

      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Agora falo do presente. O presente que tu és. Desde antes de conhecê-la eu já via o quanto você era uma pessoa diferente. Entre
        várias sensações que tinha ao vê-la nenhuma delas me causava repulsa, pelo contrário, só me deixavam mais desejoso
        de conhecê-la, ainda que sem qualquer tipo de pretenção ou esperança de que isso um dia aconteceria. Uma pessoa
        extremamente engraçada, com bochechas chamativas, um sorriso belíssimo, cabelos longos, moradora do IFPB. Essas são
        as características da pessoa que o Senhor me apresentava. Logo de cara você percebe quão pouco me encantou. Afinal,
        a sua beleza física não chega aos pés da preciosidade que é o teu coração.
        </Text>

      <Image source={foto2} style={{ margin: 10, borderRadius: 100, }} width="80%" height={400} />

      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Já te contei que queria te conhecer, te via, de vez em quando te encarava, mas nada sabia sobre ti. Engraçado como
        as coisas de Deus são. Como já conversamos, enquanto eu estava solteiro você namorava e quando você ficou solteira
        eu havia começado a namorar. Vemos que a distância, mas sobretudo a vontade de Deus, sempre esteve presente, pois ainda
        que você pensasse que um dia eu de alguma forma falaria com você, não foi da forma que imaginou e muito menos no tempo
        que nós achávamos que aconteceria.
        </Text>

      <Text style={{ padding: 18, color: '#222', backgroundColor: "yellow", borderRadius: 10, fontWeight: 'bold', fontSize: 18 }} >VONTADE DE DEUS, ÉS MEU PARAÍSO</Text>

      <Text style={{ color: "#FFFFFF", fontSize: 16, margin: 5, textAlign: "center" }}>
        Certamente já nos cruzamos várias vezes pela Doce Mãe de Deus, em diversas situações. Vigílias, adorações, Missas, encontros, etc.
        Porém, Deus quis que no Seu tempo nós pudéssemos nos encontrar. Talvez, se tivesse acontecido antes e de outra forma, 
        poderíamos ter acabado com o sonho de Deus para nós. Mas não vivemos de "talvez" e nem de "se". Vivemos de Fé. Tenho certeza
        de que tudo aconteceu conforme a Vontade do Nosso Senhor.  
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Nove')} style={{ width: '100%', height: 120, alignItems: "center", justifyContent: "center", backgroundColor: '#23527C' }}>
        <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', margin: 5, textAlign: "center" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Cinco;