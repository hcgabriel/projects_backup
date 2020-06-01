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
import icProfile from '../assets/img/ic-profile-2.png';
import icBag from '../assets/img/shopping-bag.png';
import icBack from '../assets/img/icon-back.png';
import img1 from '../assets/img/img-1.png';
import imgBanner1 from '../assets/img/img-banner-1.png';
import bgOrange from '../assets/img/bg-orange-3.png';

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

const InputItem = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        marginBottom: 5,
      }}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#F6F6F6',
          width: '90%',
        }}>
        <Text style={{paddingLeft: 10, color: '#1D1B1B', fontSize: 10}}>
          {props.name}
        </Text>
        {props.type == 'password' && (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'space-around',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{color: '#1D1B1B', fontSize: 16}}
              secureTextEntry
            />
            <Text
              style={{
                textAlignVertical: 'center',
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
              }}>
              Alterar senha
            </Text>
          </View>
        )}
        {props.type != 'password' && (
          <TextInput style={{color: '#1D1B1B', fontSize: 16}} />
        )}
      </View>
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
          justifyContent: 'space-between',
          padding: 18,
          marginBottom: 10,
          width: '100%',
        }}>
        <Image
          source={icBack}
          style={{width: 17, height: 14, marginHorizontal: 5}}
        />
        <Text style={{color: '#1D1B1B', fontSize: 22}}>Perfil</Text>
        <Image
          //source={icBag}
          style={{width: 18, height: 20, marginHorizontal: 5}}
        />
      </View>
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
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={icProfile} />
      </View>
      <InputItem name="NOME COMPLETO" type="text" placeholder="" />
      <InputItem name="E-MAIL" type="texdt" placeholder="" />
      <InputItem name="TELEFONE" type="phone" placeholder="" />
      <InputItem name="SENHA" type="password" placeholder="" />
      <ImageBackground
        style={{
          width: '100%',
          height: 50,
          position: 'absolute',
          top: 120,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          borderWidth: 2,
          borderColor: '#F6F6F6',
          backgroundColor: '#FDFDFD',
        }}
        // source={bgOrange}
      />
    </ContainerScroll>
  );
};

Products.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default Products;
