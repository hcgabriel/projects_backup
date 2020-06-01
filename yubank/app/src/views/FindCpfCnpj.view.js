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
} from '../assets/styles/styles';

import bgOne from '../assets/img/bg-1.png';

import Modal from '../assets/components/modal';

const FindCpfCnpj = props => {
  const [sex, setSex] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SplashContainer>
      <Modal visible={modalVisible} />
      <View
        style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Text style={{fontSize: 35, color: '#203864'}}>R$1.400,00</Text>
        <Text style={{fontSize: 15, color: '#7f7f7f'}}>Saldo</Text>
        <Text
          style={{
            fontSize: 18,
            color: '#7f7f7f',
            width: '96%',
            marginTop: 100,
            textAlign: 'center',
          }}>
          Digite o CPF ou CPNJ que deseja consultar
        </Text>

        <BoxInput>
          <TextInput placeholder="CPF/CNPJ" />
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

FindCpfCnpj.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default FindCpfCnpj;
