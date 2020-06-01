import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import Livros from '../screens/Livros';
import AddLivro from '../screens/AddLivro';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Livros"
        component={Livros}
        options={{
          title: 'Livros',
          // tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Novo Livro"
        component={AddLivro}
        options={{
          title: 'Novo Livro',
          // tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle-outline" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Livros':
      return 'Livros';
    case 'Novo Livro':
      return 'Adicionar livro';
    case 'Links':
      return 'Perfil';
  }
}
