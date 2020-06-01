import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SplashContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerScroll = styled.ScrollView`
  /* flex: 1; */
  /* align-items: center;
  justify-content: center; */
  height: 100%;
  width: 100%;
`;

export const LogoY = styled.Image`
  /* width: 194px; */
  width: 52%;
  /* height: 72px; */
  height: 10%;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const LogoCDL = styled.Image`
  width: 211px;
  height: 58px;
  margin: 10px;
`;

export const TitleOne = styled.Text`
  font-size: 33px;
  color: #f25700;
  width: 75%;
  text-align: center;
`;

export const BgOne = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoGroup = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  top: -100;
`;

export const BgTwo = styled.ImageBackground`
  /* width: 100%; */
  width: 400px;
  /* height: 300px; */
  height: 400px;
  /* position: absolute; */
  top: -50;
  /* top: 0; */
  /* align-items: center;
  justify-content: center; */
`;

export const LogoYTwo = styled.Image`
  width: 147px;
  height: 147px;
  margin: 20px;
`;

export const LogoGroupTwo = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  top: -150;
`;

export const BtnBlue = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: #222335;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const TxtWhite = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const BtnWhite = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 25px;
  border-width: 2px;
  border-color: #e6e8ea;
  align-items: center;
  justify-content: center;
  margin: 20px;
  top: -100;
`;

export const TxtBlack = styled.Text`
  color: #1d1b1b;
  font-size: 16px;
`;

export const TxtLink = styled.TouchableOpacity`
  width: 90%;
  /* border-bottom-width: 1px; */
  border-color: #555555;
  align-items: center;
  justify-content: center;
`;

export const BgThree = styled.ImageBackground`
  /* width: 100%; */
  width: 400px;
  /* height: 300px; */
  height: 400px;
  /* position: absolute; */
  top: -50;
  /* top: 0; */
  /* align-items: center;
  justify-content: center; */
`;

export const BtnOrange = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: #d59515;
  border-radius: 10px;
  border-width: 2px;
  border-color: #203864;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const BoxInput = styled.View`
  border-width: 2px;
  border-color: #7f7f7f;
  border-radius: 10px;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding-left: 25px;
  flex-direction: row;
  margin: 10px;
  background-color: #d9d9d9;
`;

export const BoxValue = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  width: 75%;
  height: 66px;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  flex-direction: row;
  margin: 10px;
  background-color: #203864;
`;

export const BoxText = styled.Text`
  color: #ffffff;
`;

export const TextInput = styled.TextInput`
  width: 90%;
  margin: 5px;
  padding: 5px;
`;

export const Picker = styled.Picker`
  border-width: 2px;
  border-color: #7f7f7f;
  border-radius: 10px;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding-left: 25px;
  flex-direction: row;
  margin: 3px;
  background-color: #d9d9d9;
`;

export const ScrollBox1 = styled.TouchableOpacity`
  width: 319px;
  height: 212px;
  border-radius: 5px;
  background-color: #213111;
  margin: 5px;
`;

export const ScrollBox2 = styled.TouchableOpacity`
  border-radius: 5px;
  margin: 5px;
`;

export const BoxTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  padding-right: 20px;
`;

export const DescBox = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  width: 100%;
`;

export const PriceBox = styled.View`
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 6px;
  background-color: #ffdd64;
  width: 100px;
  height: 34px;
`;

export const PriceText = styled.Text`
  font-size: 18px;
  color: #1d1b1b;
`;

export const PriceName = styled.Text`
  font-size: 24px;
  color: #ffffff;
`;

export const BtnOrange2 = styled.Text`
  color: #ffffff;
  font-size: 13;
  background-color: #f25700;
  text-align: center;
  text-align-vertical: center;
  padding: 6px;
  border-radius: 15;
`;

export const BtnYellow2 = styled.Text`
  color: #ffffff;
  font-size: 13;
  background-color: #eaa20d;
  text-align: center;
  text-align-vertical: center;
  padding: 6px;
  border-radius: 15;
`;

export const BtnBlue2 = styled.Text`
  color: #ffffff;
  font-size: 13;
  background-color: #3500a7;
  text-align: center;
  text-align-vertical: center;
  padding: 6px;
  border-radius: 15;
`;

export const CheckGroup = styled.View`
  justify-content: space-between;
  width: 90%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const CheckItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #383838;
`;

export const CheckText = styled.Text`
  font-size: 18px;
`;

// -------------------------------------
// -------------------------------------
// -------------------------------------
// --------------MODAL------------------
export const ModalContainer = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  /* background-color: #eeeeee; */
  position: absolute;
  z-index: 20;
`;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 90%;
  border-radius: 10px;
  background-color: #ffffff;
  position: absolute;
  z-index: 3;
  padding: 18px;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #383838;
  margin-top: 10px;
  margin-bottom: 10px;
`;
