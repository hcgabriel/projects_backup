import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import api from '../services/api.service';
import styles from '../assets/styles';

const NowPlaying = (props) => {

    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
      getNowPlaying();
    }, []);
  
  
    const getNowPlaying = async () => {
      let m = await api.get('/now_playing?api_key=fc606260ef02882bde1fbe7c628922e9&language=pt-BR&page=1');
      m = await m.data.results;
      await setNowPlaying(m);
    }

    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <View style={styles.body}>
            {nowPlaying.map(m => {
              return (
                <TouchableOpacity onPress={ () => props.navigation.navigate('Movie', { title: m.title, path: m.poster_path })} style={styles.movie}>
                  { m.poster_path &&
                        <Image style={{ width: '90%', height: 120, borderRadius: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/original/' + m.poster_path }} />
                  }
                  { !(m.poster_path)  &&
                        <View style ={{ width: '90%', height: 120, borderRadius: 5, backgroundColor: '#999999' }} />
                  }
                  <Text style={styles.movieTitle} key={m.title}>{m.title}</Text>
                  <Text style={styles.movieDesc}>Data de lançamento:  {m.release_date}</Text>
                  <Text style={styles.movieDesc}>Avaliação: {m.vote_average}</Text>
                </TouchableOpacity>
              )
            })}

        <Button onPress={() => props.navigation.navigate('Movie')} title='GO TO MOVIE' />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    );
}

export default NowPlaying;