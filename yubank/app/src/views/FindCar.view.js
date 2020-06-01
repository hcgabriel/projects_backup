import React, {useState} from 'react';

import {View, Text, CheckBox} from 'react-native';

import {
  SplashContainer,
  BgOne,
  TxtWhite,
  BtnOrange,
  BoxInput,
  TextInput,
  CheckGroup,
  CheckItem,
  CheckTitle,
  CheckText,
  ModalContent,
  Picker,
} from '../assets/styles/styles';

import bgOne from '../assets/img/bg-1.png';

import Modal from '../assets/components/modal';

const FindCar = props => {
  const [sex, setSex] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);
  const ufs = [
    'Selecione o estado',
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];
  const [uf, setUf] = useState(ufs[0]);

  return (
    <SplashContainer>
      <Modal visible={modalVisible} />
      <View
        style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Text style={{fontSize: 35, color: '#203864'}}>R$1.400,00</Text>
        <Text style={{fontSize: 15, color: '#7f7f7f'}}>Saldo</Text>
        <Picker
          selectedValue={uf}
          // style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setUf(itemValue)}>
          {ufs.map(u => {
            return <Picker.Item key={u} label={u} value={u} />;
          })}
        </Picker>
        <Text
          style={{
            fontSize: 18,
            color: '#7f7f7f',
            width: '96%',
            marginTop: 10,
            textAlign: 'center',
          }}>
          Digite a placa do veículo
        </Text>

        <BoxInput>
          <TextInput placeholder="Placa do veículo" />
        </BoxInput>
        <BtnOrange
          style={{width: '75%'}}
          // onPress={() => props.navigation.navigate('Login')}>
          onPress={() => {
            setModalVisible(true);
          }}>
          <TxtWhite>Consultar</TxtWhite>
        </BtnOrange>
      </View>
    </SplashContainer>
  );
};

FindCar.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default FindCar;
