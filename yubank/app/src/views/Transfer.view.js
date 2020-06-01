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

const Transfer = props => {
  const [sex, setSex] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SplashContainer>
      <Modal visible={modalVisible} />
      <View
        style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Text style={{fontSize: 35, color: '#203864'}}>R$1.400,00</Text>
        <Text style={{fontSize: 15, color: '#7f7f7f'}}>Saldo</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-around',
          }}>
          <BoxInput style={{width: '35%'}}>
            <TextInput placeholder="Banco" />
          </BoxInput>
          <BoxInput style={{width: '60%'}}>
            <TextInput placeholder="Agência" />
          </BoxInput>
        </View>
        <BoxInput>
          <TextInput placeholder="Conta" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="Tipo de Conta" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="Nome do favorecido" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="CPF/CNPJ" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="Finalidade da transferência" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="Data da transferência" />
        </BoxInput>
        <BtnOrange
          style={{width: '75%'}}
          // onPress={() => props.navigation.navigate('Login')}>
          onPress={() => {
            setModalVisible(true);
          }}>
          <TxtWhite>Confirmar</TxtWhite>
        </BtnOrange>
      </View>
    </SplashContainer>
  );
};

Transfer.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default Transfer;
