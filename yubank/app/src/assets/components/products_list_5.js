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
} from '../styles/styles';

import icSearch from '../img/icon-search.png';
import icFilter from '../img/icon-filter.png';
import icBag from '../img/shopping-bag.png';
import icPlace from '../img/ic-place.png';
import icArrow from '../img/ic-arrow.png';
import icLocal from '../img/icon-local.png';
import icPhone from '../img/icon-phone.png';
import icShop from '../img/icon-shop.png';
import icStar from '../img/star.png';

import bg1 from '../img/bg-test-1.png';
import bg2 from '../img/bg-test-2.png';
import bg3 from '../img/bg-test-3.png';
import logo1 from '../img/logo-test-1.png';
import logo2 from '../img/logo-test-2.png';
import logo3 from '../img/logo-test-3.png';
import imgBanner1 from '../img/img-banner-1.png';

const Star = props => {
  return (
    <View style={{marginTop: 15, marginBottom: 15, marginLeft: 5}}>
      <Image source={icStar} style={{width: 20, height: 20}} />
    </View>
  );
};

const Store = props => {
  return (
    <ScrollBox2 style={{width: '90%', marginBottom: 20}}>
      <Image
        source={props.bg}
        style={{width: '100%', height: 216, borderRadius: 8}}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          position: 'absolute',
          top: 133,
          left: -10,
        }}>
        <Image source={props.logo} width={66} height={66} />
        <View>
          <Text style={{color: '#FFFFFF', fontSize: 21}}>{props.name}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 15,
          }}>
          <Image
            source={icLocal}
            style={{width: 19, height: 19, marginHorizontal: 5}}
          />
          <Text style={{fontSize: 14}}> {props.place} </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', width: '50%'}}>
            <Image
              source={icPhone}
              style={{width: 19, height: 19, marginHorizontal: 5}}
            />
            <Text style={{fontSize: 14}}> {props.phone} </Text>
          </View>
          <View style={{flexDirection: 'row', width: '50%'}}>
            <Image
              source={icShop}
              style={{width: 19, height: 19, marginHorizontal: 5}}
            />
            <Text style={{fontSize: 14}}> {props.status} </Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </View>
    </ScrollBox2>
  );
};

const ProductsList = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <Store
        bg={bg1}
        logo={logo1}
        name="Importados da Lisi"
        place="Rua Bom Sucesso, 1410, Jóquei Club, Campo Grande/MS"
        phone="(67) 99299.9797"
        status="Loja Fechada"
        stars={5}
      />
    </View>
  );
};

export default ProductsList;
