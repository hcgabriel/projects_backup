import React from 'react';
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
//import api from '../services/api.service';


const Movie = (props) => {

    const params = props.navigation.state.params;

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.movie}>
                            <Image style={{ width: '90%', height: 500, borderRadius: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/original/' + params.path }} />
                            <Text style={styles.movieTitle} >{params.title}</Text>
                        </View>
                        <View style={styles.movie}>
                            <Image style={{ width: '90%', height: 500, borderRadius: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/original/' + params.path }} />
                            <Text style={styles.movieTitle} >{params.title}</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default Movie;