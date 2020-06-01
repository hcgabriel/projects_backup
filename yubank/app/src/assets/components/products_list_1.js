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
import img1 from '../img/img-1.png';
import imgBanner1 from '../img/img-banner-1.png';
import imgBanner2 from '../img/img-banner-2.png';

const TopItem = props => {
  return (
    <ScrollBox1>
      <Image source={props.img} width={150} height={200} />
      <DescBox style={{top: -50}}>
        <PriceName>{props.name}</PriceName>
        <PriceBox>
          <PriceText>{props.price}</PriceText>
        </PriceBox>
      </DescBox>
    </ScrollBox1>
  );
};

const ProductsList = props => {
  return (
    <ScrollView horizontal style={{width: '100%', height: 200}}>
      {/* <ScrollView horizontal style={{width: '100%', height: '100%'}}> */}
      <TopItem img={imgBanner1} name="Camisa Infuse" price="R$49,90" />
      <TopItem img={imgBanner2} name="Camisa Infuse" price="R$49,90" />
    </ScrollView>
  );
};

export default ProductsList;
