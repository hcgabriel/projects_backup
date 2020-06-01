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

const Reload = props => {
  const [sex, setSex] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SplashContainer>
      <Modal visible={modalVisible} />
      <BgOne source={bgOne}>
        <Text style={{fontSize: 35, color: '#203864'}}>R$1.400,00</Text>
        <Text style={{fontSize: 15, color: '#7f7f7f'}}>Saldo</Text>
        <BoxInput>
          <TextInput placeholder="Operadora" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="Número do celular" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="Confirmar número" />
        </BoxInput>
        <BoxInput>
          <TextInput placeholder="Valor" />
        </BoxInput>
        <BtnOrange
          style={{width: '75%'}}
          // onPress={() => props.navigation.navigate('Login')}>
          onPress={() => {
            setModalVisible(true);
          }}>
          <TxtWhite>Confirmar</TxtWhite>
        </BtnOrange>
      </BgOne>
    </SplashContainer>
  );
};

Reload.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default Reload;
