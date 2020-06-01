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
import img2 from '../img/img-2.png';
import img3 from '../img/img-3.png';
import imgBanner1 from '../img/img-banner-1.png';

const MostSell = props => {
  return (
    <ScrollBox2 style={{height: 500, padding: 5}}>
      <Image source={props.img} width={150} height={200} />
      <Text style={{color: '#1D1B1B', fontSize: 15}}>{props.name}</Text>
      <Text style={{color: '#F25700', fontSize: 13}}>{props.price}</Text>
    </ScrollBox2>
  );
};

const ProductsList = props => {
  return (
    <ScrollView horizontal style={{width: '100%', height: 230}}>
      <MostSell img={img1} name="Saia Média Florida" price="R$52,90" />
      <MostSell img={img2} name="Vestido Longo" price="R$98,90" />
      <MostSell img={img3} name="Vestido Longo" price="R$98,90" />
    </ScrollView>
  );
};

export default ProductsList;
