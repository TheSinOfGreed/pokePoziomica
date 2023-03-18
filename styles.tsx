import { StyleSheet } from 'react-native';

export const styles_menu = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
    },
    navbar:{
      backgroundColor: 'rgb(210, 43, 43)',
      width: 100 + '%',
      height: 10 + '%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      elevation: 500,
    },
    content:{
      width: 100 + '%',
      height: 90 + '%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 90,
      height: 90,
    },
    pokemonElement: {
      width: 120,
      height: 120,
    },
});

export const styles_vertical = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      position: 'absolute',
      backgroundColor: 'gray',
      height: 2,
      width: '100%',
    },
    horizontal: {
      top: '50%',
      zIndex: -2,
    },
    vertical: {
      left: '50%',
      height: '100%',
      width: 2,
      zIndex: -2,
    },
    bubble: {
      position: 'absolute',
      // backgroundColor: 'blue',
      height: 35,
      width: 35,
      // borderRadius: 15,
      // borderWidth: 2,
      // borderColor: 'black',
      // transition: "transform 0.3s ease",
    },
    frame: {
      position: 'absolute',
      height: 38,
      width: 40,
      borderWidth: 5,
      zIndex: -1,
    },
    text: {
      fontSize: 20,
      marginTop: 20,
      transform: [{ rotate: '90deg' }],
      marginRight: 50,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });