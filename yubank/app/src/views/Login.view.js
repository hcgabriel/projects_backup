import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Container,
  SplashContainer,
  LogoY,
  LogoCDL,
  TitleOne,
  BgOne,
  BgTwo,
  BgThree,
  LogoGroup,
  LogoYTwo,
  LogoGroupTwo,
  BtnBlue,
  TxtWhite,
  BtnWhite,
  TxtBlack,
  TxtLink,
  BtnOrange,
  BoxInput,
  TextInput,
} from '../assets/styles/styles';

import logoY from '../assets/img/logo.png';
import logoCDL from '../assets/img/logo-2.png';
import bgOne from '../assets/img/bg-1.png';
// import icMail from '../assets/img/ic-mail.png';
// import icPass from '../assets/img/ic-senha.png';

const Login = props => {
  return (
    <SplashContainer>
      {/* <BgOne source={bgOne}> */}
      <LogoY source={logoY} style={{marginBottom: 50}} />
      <BoxInput>
        {/* <Image source={icMail} style={{width: 16}}/> */}
        <TextInput placeholder="E-mail" />
      </BoxInput>
      <BoxInput>
        {/* <Image source={icPass} style={{width: 16}} /> */}
        <TextInput placeholder="Senha" type="password" />
      </BoxInput>
      <TxtLink onPress={() => props.navigation.navigate('ForgotPass')}>
        <Text
          style={{
            textDecorationLine: 'underline',
            textAlign: 'left',
            width: '100%',
            marginBottom: 25,
          }}>
          Esqueci minha senha
        </Text>
      </TxtLink>
      <BtnOrange
        style={{width: '75%'}}
        onPress={() => props.navigation.navigate('Login')}>
        <TxtWhite>Acessar</TxtWhite>
      </BtnOrange>
      <BtnOrange
        style={{width: '75%'}}
        onPress={() => props.navigation.navigate('Login')}>
        <TxtWhite>Cadastre-se</TxtWhite>
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
