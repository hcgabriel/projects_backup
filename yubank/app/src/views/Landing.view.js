import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  SplashContainer,
  LogoY,
  BgOne,
  LogoGroup,
} from '../assets/styles/styles';

import logoY from '../assets/img/logo.png';
import bgOne from '../assets/img/bg-1.png';

const Landing = props => {
  return (
    <SplashContainer>
      {/* <BgOne source={bgOne}> */}
      <LogoY source={logoY} />
      {/* </BgOne> */}
    </SplashContainer>
  );
};

Landing.navigationOptions = props => ({
  // title: 'Landing',
  header: null,
});

export default Landing;
