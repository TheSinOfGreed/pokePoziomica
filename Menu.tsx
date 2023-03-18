import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { styles_menu as styles } from './styles';
import { NavigationProp } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<any>;
}

const Menu: React.FC<Props> = ({navigation}: Props) =>{

    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image style={styles.logo} source={require('./pokeball.png')} />
            </View>
            
            
            <View style={styles.content}>
                <Image  style={{...styles.pokemonElement, marginBottom: 50}} source={require('./assets/pokemony/pokemon1.png')} />
                <Button color={'rgb(210, 43, 43)'} onPress={()=>{navigation.navigate('Vertical')}} title='Złap pokemona' />
            </View>
        </View>
    );
}

export default Menu