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

const Login = props => {
  const [sex, setSex] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SplashContainer>
      <Modal visible={modalVisible} />
      {/* <BgOne source={bgOne}> */}
      <BoxInput>
        <TextInput placeholder="Nome" />
      </BoxInput>
      <BoxInput>
        <TextInput placeholder="CPF" />
      </BoxInput>
      <BoxInput>
        <TextInput placeholder="E-mail" />
      </BoxInput>
      <BoxInput>
        <TextInput placeholder="Data de Nascimento" />
      </BoxInput>
      <CheckGroup>
        <CheckTitle>Sexo</CheckTitle>
        <View style={{flexDirection: 'row'}}>
          <CheckItem>
            <CheckText>Masculino</CheckText>
            <CheckBox value={true} onValueChange={() => {}} />
          </CheckItem>
          <CheckItem>
            <CheckText>Feminino</CheckText>
            <CheckBox value={false} onValueChange={() => {}} />
          </CheckItem>
        </View>
      </CheckGroup>
      <BoxInput>
        <TextInput placeholder="Senha" type="password" />
      </BoxInput>
      <BoxInput>
        <TextInput placeholder="Confirmar Senha" type="password" />
      </BoxInput>
      <BtnOrange
        style={{width: '75%'}}
        // onPress={() => props.navigation.navigate('Login')}>
        onPress={() => {
          setModalVisible(true);
        }}>
        <TxtWhite>Cadastrar</TxtWhite>
      </BtnOrange>
      {/* </BgOne> */}
    </SplashContainer>
  );
};

Login.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default Login;
