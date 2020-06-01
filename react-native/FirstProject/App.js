import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import api from './src/services/api.service';

const App = () => {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getNowPlaying();
    getPopular();
    getTopRated();
  }, []);


  const getNowPlaying = async () => {
    let m = await api.get('/now_playing?api_key=fc606260ef02882bde1fbe7c628922e9&language=pt-BR&page=1');
    m = await m.data.results;
    await setNowPlaying(m);
  }
  const getPopular = async () => {
    let m = await api.get('/popular?api_key=fc606260ef02882bde1fbe7c628922e9&language=pt-BR&page=1');
    m = await m.data.results;
    await setPopular(m);
  }
  const getTopRated = async () => {
    let m = await api.get('/top_rated?api_key=fc606260ef02882bde1fbe7c628922e9&language=pt-BR&page=1');
    m = await m.data.results;
    await setTopRated(m);
  }



  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>Em cartaz</Text>
            {nowPlaying.map(m => {
              return (
                <View style={styles.movie}>
                  { m.poster_path &&
                        <Image style={{ width: '90%', height: 120, borderRadius: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/original/' + m.poster_path }} />
                  }
                  { !(m.poster_path)  &&
                        <View style ={{ width: '90%', height: 120, borderRadius: 5, backgroundColor: '#999999' }} />
                  }
                  <Text style={styles.movieTitle} key={m.title}>{m.title}</Text>
                  <Text style={styles.movieDesc}>Data de lançamento:  {m.release_date}</Text>
                  <Text style={styles.movieDesc}>Avaliação: {m.vote_average}</Text>
                </View>
              )
            })}


            <Text style={styles.sectionTitle}>Populares</Text>
            {popular.map(m => {
              return (
                <View style={styles.movie}>
                { m.poster_path &&
                      <Image style={{ width: '90%', height: 120, borderRadius: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/original/' + m.poster_path }} />
                }
                { !(m.poster_path) &&
                      <View style ={{ width: '90%', height: 120, borderRadius: 5, backgroundColor: '#999999' }} />
                }
                <Text style={styles.movieTitle} key={m.title}>{m.title}</Text>
                  <Text style={styles.movieDesc}>Data de lançamento:  {m.release_date}</Text>
                  <Text style={styles.movieDesc}>Avaliação: {m.vote_average}</Text>
                </View>
              )
            })}


            <Text style={styles.sectionTitle}>Mais votados</Text>
            {topRated.map(m => {
              return (
                <View style={styles.movie}>
                  { m.poster_path &&
                        <Image style={{ width: '90%', height: 120, borderRadius: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/original/' + m.poster_path }} />
                  }
                  { !(m.poster_path) &&
                        <View style ={{ width: '90%', height: 120, borderRadius: 5, backgroundColor: '#999999' }} />
                  }
                  <Text style={styles.movieTitle} key={m.title}>{m.title}</Text>
                  <Text style={styles.movieDesc}>Data de lançamento:  {m.release_date}</Text>
                  <Text style={styles.movieDesc}>Avaliação: {m.vote_average}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#CCCCCC',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    margin: 5
  },

  movie: {
    padding: 5,
    marginTop: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  movieDesc: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#555555',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
