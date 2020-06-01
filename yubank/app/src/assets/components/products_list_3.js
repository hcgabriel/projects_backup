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
import img1 from '../img/img-bg-1.png';
import img2 from '../img/img-bg-2.png';
import img3 from '../img/img-bg-3.png';
import img4 from '../img/img-bg-4.png';
import imgBanner1 from '../img/img-banner-1.png';

const MostPopular = props => {
  return (
    <ScrollBox2>
      <Image source={props.img} width={162} height={216} />
      <Text style={{color: '#1D1B1B', fontSize: 15}}>{props.name}</Text>
      <Text style={{color: '#F25700', fontSize: 13}}>{props.price}</Text>
    </ScrollBox2>
  );
};

const ProductsList = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 600,
        width: '100%',
      }}>
      <MostPopular img={img1} name="Saia Média Florida" price="R$52,90" />
      <MostPopular img={img2} name="Vestido Renda" price="R$52,90" />
      <MostPopular img={img3} name="Vestido Lã" price="R$52,90" />
      <MostPopular img={img4} name="Vestido Floral" price="R$52,90" />
    </View>
  );
};

export default ProductsList;
