// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Um from './src/screens/Um';
import Dois from './src/screens/Dois';
import Tres from './src/screens/Tres';
import Quatro from './src/screens/Quatro';
import Cinco from './src/screens/Cinco';
import Seis from './src/screens/Seis';
import Sete from './src/screens/Sete';
import Oito from './src/screens/Oito';
import Nove from './src/screens/Nove';
import Dez from './src/screens/Dez';
import Onze from './src/screens/Onze';
import Doze from './src/screens/Doze';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Um" component={Um} options={{ headerShown: false}} />
        <Stack.Screen name="Dois" component={Dois} options={{ headerShown: false}} />
        <Stack.Screen name="Tres" component={Tres} options={{ headerShown: false}} />
        <Stack.Screen name="Quatro" component={Quatro} options={{ headerShown: false}} />
        <Stack.Screen name="Cinco" component={Cinco} options={{ headerShown: false}} />
        <Stack.Screen name="Seis" component={Seis} options={{ headerShown: false}} />
        <Stack.Screen name="Sete" component={Sete} options={{ headerShown: false}} />
        <Stack.Screen name="Oito" component={Oito} options={{ headerShown: false}} />
        <Stack.Screen name="Nove" component={Nove} options={{ headerShown: false}} />
        <Stack.Screen name="Dez" component={Dez} options={{ headerShown: false}} />
        <Stack.Screen name="Onze" component={Onze} options={{ headerShown: false}} />
        <Stack.Screen name="Doze" component={Doze} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;