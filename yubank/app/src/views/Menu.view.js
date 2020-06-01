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

import icShape from '../assets/img/ic-shape.png';
import icArrowBlack from '../assets/img/ic-arrow-black.png';
import icBlackCard from '../assets/img/ic-black-card.png';
import icBlackHeart from '../assets/img/ic-black-heart.png';
import icBlackPlace from '../assets/img/ic-black-place.png';
import icBlackAlert from '../assets/img/ic-black-alert.png';
import icPower from '../assets/img/ic-power.png';

import icArrow from '../assets/img/ic-arrow.png';
import icProfile from '../assets/img/ic-profile.png';
import icBag from '../assets/img/shopping-bag.png';
import img1 from '../assets/img/img-1.png';
import imgBanner1 from '../assets/img/img-banner-1.png';
import bgBlue from '../assets/img/bg-blue.png';

import ProductsList1 from '../assets/components/products_list_1';
import ProductsList2 from '../assets/components/products_list_2';
import ProductsList3 from '../assets/components/products_list_3';

const ProfileBar = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        marginTop: 10,
        marginBottom: 60,
        marginRight: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={props.icon} width={props.width} height={props.height} />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              color: '#FFFFFF',
              paddingLeft: 10,
              fontSize: 18,
              fontWeight: '900',
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              paddingLeft: 10,
              fontSize: 13,
              fontWeight: '300',
            }}>
            {props.email}
          </Text>
        </View>
      </View>
      <Image source={icArrow} width={props.width} height={props.height} />
    </View>
  );
};

const Item = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={props.icon} width={props.width} height={props.height} />
        <Text style={{paddingLeft: 10}}>{props.name}</Text>
      </View>
      <Image source={icArrowBlack} width={props.width} height={props.height} />
    </View>
  );
};

const Products = props => {
  return (
    <ContainerScroll style={{backgroundColor: 'transparent'}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          paddingRight: 10,
        }}
      />
      <ProfileBar
        name="Francisco de Assis"
        icon={icProfile}
        email="francisco.de.assis@yubank.com.br"
      />
      <Item name="Histórico" icon={icShape} width={15} height={15} />
      <Item name="Endereços" icon={icBlackPlace} width={15} height={15} />
      <Item
        name="Meios de Pagamento"
        icon={icBlackCard}
        width={15}
        height={15}
      />
      <Item name="Notificações" icon={icBlackAlert} width={15} height={15} />
      <Item name="Favoritos" icon={icBlackHeart} width={15} height={15} />
      <Item name="Sair" icon={icPower} width={15} height={15} />
      <ImageBackground
        style={{
          width: '100%',
          height: 180,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          // backgroundColor: '#EC4700',
          borderBottomLeftRadius: 50,
        }}
        source={bgBlue}
      />
    </ContainerScroll>
  );
};

Products.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default Products;
