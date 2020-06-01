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

import bg1 from '../img/bg-test-1.png';
import bg2 from '../img/bg-test-2.png';
import bg3 from '../img/bg-test-3.png';
import logo1 from '../img/logo-test-1.png';
import logo2 from '../img/logo-test-2.png';
import logo3 from '../img/logo-test-3.png';
import imgBanner1 from '../img/img-banner-1.png';

const MostPopular = props => {
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
          // backgroundColor: '#000aaa',
        }}>
        <Image source={props.logo} width={66} height={66} />
        <View>
          <Text style={{color: '#FFFFFF', fontSize: 21}}>{props.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image source={icPlace} style={{width: 11, height: 13}} />
            <Text style={{color: '#FFFFFF', fontSize: 14, padding: 2}}>
              {props.place}
            </Text>
          </View>
        </View>
        <Image
          source={icArrow}
          style={{width: 10, height: 12, marginHorizontal: 15}}
        />
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
      <MostPopular
        bg={bg1}
        logo={logo1}
        name="Importados da Lisi"
        place="Campo Grande/MS"
      />
      <MostPopular
        bg={bg2}
        logo={logo2}
        name="Importados da Lisi"
        place="Campo Grande/MS"
      />
      <MostPopular
        bg={bg3}
        logo={logo3}
        name="Importados da Lisi"
        place="Campo Grande/MS"
      />
    </View>
  );
};

export default ProductsList;
