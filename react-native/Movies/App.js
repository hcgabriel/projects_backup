import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import NowPlaying from './src/views/nowPlaying.view';
import Popular from './src/views/popular.view';
import TopRated from './src/views/topRated.view';
import Movie from './src/views/movie.view';

const MovieOptions = { screen: Movie, navigationOptions: {title: 'Filme' } };

const NowPlayingScreen = createStackNavigator({ 
  NowPlaying: { screen: NowPlaying, navigationOptions: {title: 'Em cartaz'}},
  Movie: MovieOptions
});
const PopularScreen = createStackNavigator({ 
  Popular: { screen: Popular, navigationOptions: {title: 'Populares'}},
  Movie: MovieOptions
});
const TopRatedScreen = createStackNavigator({ 
  TopRated: { screen: TopRated, navigationOptions: {title: 'Mais votados'}},
  Movie: MovieOptions
});

const AppNavigator = createDrawerNavigator({
  NowPlaying: { screen: NowPlayingScreen, navigationOptions: {title: 'Em cartaz' } },
  Popular: { screen: PopularScreen, navigationOptions: {title: 'Populares' } },
  TopRated: { screen: TopRatedScreen, navigationOptions: {title: 'Mais votados' } },
});

const App =  createAppContainer(AppNavigator);
export default App;