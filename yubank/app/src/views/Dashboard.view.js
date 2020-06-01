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
  Container,
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
  ScrollBox1,
  ScrollBox2,
  BoxTitle,
  PriceBox,
  PriceText,
  PriceName,
  DescBox,
  ContainerScroll,
  BtnOrange2,
} from '../assets/styles/styles';

import icMoney from '../assets/img/ic-money.png';
import icPerson from '../assets/img/ic-person.png';
import icBank from '../assets/img/ic-bank.png';
import icArrows from '../assets/img/ic-arrows.png';
import icBar from '../assets/img/ic-bar.png';
import icPhone from '../assets/img/ic-phone.png';
import icGraph from '../assets/img/ic-graph.png';

import icArrow from '../assets/img/ic-arrow.png';
import icProfile from '../assets/img/ic-profile.png';
import icBag from '../assets/img/shopping-bag.png';
import img1 from '../assets/img/img-1.png';
import imgBanner1 from '../assets/img/img-banner-1.png';
import bgBlue from '../assets/img/bg-blue.png';

import ProductsList1 from '../assets/components/products_list_1';
import ProductsList2 from '../assets/components/products_list_2';
import ProductsList3 from '../assets/components/products_list_3';

const TopBar = props => {
  return (
    <View
      style={{
        height: '35.23%',
        width: '100%',
        backgroundColor: '#1B3055',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 20,
      }}>
      <Image source={icMoney} width={88} height={88} />
      <View style={{width: '50%'}}>
        <Text style={{color: '#FFFFFF', fontSize: 30}}>R$1.400,00</Text>
        <Text style={{color: '#FFFFFF', fontSize: 21}}>Saldo</Text>
      </View>
    </View>
  );
};

const Item = props => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10.8%',
        borderColor: '#EEEEEE',
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
      }}>
      <View
        style={{
          backgroundColor: '#EACA89',
          width: '20%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={props.icon} width={props.width} height={props.height} />
      </View>
      <View
        style={{
          width: '80%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B3055',
        }}>
        <Text
          style={{
            paddingLeft: 30,
            fontSize: 22,
            color: '#FFFFFF',
            height: '100%',
            width: '100%',
            textAlignVertical: 'center',
          }}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Dashboard = props => {
  return (
    <Container>
      <TopBar />
      <Item name="Perfil" icon={icPerson} width={42} height={42} />
      <Item name="App" icon={icBank} width={36} height={40} />
      <Item name="Transferência" icon={icArrows} width={42} height={30} />
      <Item name="Pagamento" icon={icBar} width={37} height={32} />
      <Item name="Recarga" icon={icPhone} width={24} height={40} />
      <Item name="Histórico" icon={icGraph} width={37} height={37} />
    </Container>
  );
};

Dashboard.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default Dashboard;
