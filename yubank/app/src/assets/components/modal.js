import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  CheckBox,
  ScrollView,
} from 'react-native';

import {
  TxtWhite,
  LogoY,
  ModalContainer,
  BtnBlue,
  ModalText,
  ModalContent,
} from '../styles/styles';

import logoY from '../img/logo.png';

const Modal = props => {
  if (props.visible === true) {
    return (
      <ModalContainer>
        <ModalContent>
          <LogoY source={logoY} />
          <ModalText style={{fontWeight: 'bold'}}>Obrigado!</ModalText>
          <ModalText>
            Parabéns, seu cadastro foi efetuado com sucesso. Para confirmar,
            enviamos um e-mail para o endereço informado.
          </ModalText>
          <BtnBlue>
            <TxtWhite>Voltar</TxtWhite>
          </BtnBlue>
        </ModalContent>
      </ModalContainer>
    );
  } else {
    return <View />;
  }
};

export default Modal;
