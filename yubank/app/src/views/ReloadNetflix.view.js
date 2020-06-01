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
  BoxValue,
  BoxText,
} from '../assets/styles/styles';

import bgOne from '../assets/img/bg-1.png';

import Modal from '../assets/components/modal';

const ReloadNetflix = props => {
  const [sex, setSex] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);
  const times = [
    'Selecione o período',
    '15 DIAS',
    '30 DIAS',
    '45 DIAS',
    '60 DIAS',
  ];
  const [time, setTime] = useState(times[0]);
  const ops = ['Selecione a operadora', 'OI', 'CLARO', 'VIVO', 'TIM'];
  const [op, setOp] = useState(ops[0]);
  const plans = ['Selecione o plano', 'PLANO - 1', 'PLANO - 2', 'PLANO - 3'];
  const [plan, setPlan] = useState(plans[0]);

  return (
    <SplashContainer>
      <Modal visible={modalVisible} />
      <Text style={{fontSize: 35, color: '#203864'}}>R$1.400,00</Text>
      <Text style={{fontSize: 15, color: '#7f7f7f'}}>Saldo</Text>
      <Picker
        selectedValue={plan}
        // style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) => setPlan(itemValue)}>
        {plans.map(u => {
          return <Picker.Item key={u} label={u} value={u} />;
        })}
      </Picker>
      <BoxValue>
        <BoxText>Valor:</BoxText>
        <BoxText style={{fontSize: 28}}>R$100,00</BoxText>
      </BoxValue>
      <BtnOrange
        style={{width: '75%'}}
        // onPress={() => props.navigation.navigate('Login')}>
        onPress={() => {
          setModalVisible(true);
        }}>
        <TxtWhite>Confirmar</TxtWhite>
      </BtnOrange>
    </SplashContainer>
  );
};

ReloadNetflix.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default ReloadNetflix;
