import React from 'react';
import {View, Text, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Screens imports
import Landing from './src/views/Landing.view';
import Login from './src/views/Login.view';
import Register from './src/views/Register.view';

import Menu from './src/views/Menu.view';
import Dashboard from './src/views/Dashboard.view';
import Transfer from './src/views/Transfer.view';
import Payment from './src/views/Payment.view';
import Reload from './src/views/Reload.view';
import FindCpfCnpj from './src/views/FindCpfCnpj.view';
import FindCar from './src/views/FindCar.view';
import ReloadTV from './src/views/ReloadTV.view';
import ReloadGP from './src/views/ReloadGP.view';
import ReloadNetflix from './src/views/ReloadNetflix.view';
import ReloadSpotify from './src/views/ReloadSpotify.view';
import ReloadUber from './src/views/ReloadUber.view';

// const Navigator = createStackNavigator({
//   //ProfilScreens
//   Profile: Profile,
//   Menu: Menu,
//   Search: Search,
//   //Main Screens
//   StoreDetail: StoreDetail,
//   Stores: Stores,
//   Promo: Promo,
//   News: News,
//   Products: Products,
//   Categories: Categories,
//   //Enter Screens
//   Register: Register,
//   Landing: Landing,
//   Enter: Enter,
//   Login: Login,
//   ForgotPass: ForgotPass,
// });

//Temporary drawer navigator
const Navigator = createDrawerNavigator({
  //Enter Screens
  ReloadSpotify: ReloadSpotify,
  ReloadNetflix: ReloadNetflix,
  ReloadUber: ReloadUber,
  ReloadGP: ReloadGP,
  ReloadTV: ReloadTV,
  FindCar: FindCar,
  FindCpfCnpj: FindCpfCnpj,
  Payment: Payment,
  Transfer: Transfer,
  Register: Register,
  Login: Login,
  Landing: Landing,
  Reload: Reload,
  Dashboard: Dashboard,
  Menu: Menu,
});

const App = createAppContainer(Navigator);

export default App;
