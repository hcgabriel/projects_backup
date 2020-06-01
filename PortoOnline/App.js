/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './src/views/Login';
import Cadastro from './src/views/Cadastro';
import Home from './src/views/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const App = () => {
//   return <Home />;
// };

const Main = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Login" component={Login} /> */}
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerTransparent: true}}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{headerTransparent: true}}
        />
        <Stack.Screen
          name="Home"
          component={Main}
          options={({navigation}) => ({
            headerTransparent: false,
            title: 'Porto Online',
            headerLeft: () => (
              <Button
                title="test"
                onPress={() => console.log(navigation.openDrawer())}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
