import { StyleSheet } from 'react-native';

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
      flex: 1,
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

  export default styles;