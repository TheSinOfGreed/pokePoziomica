import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Animated, Image, ImageBackground } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { styles_vertical as styles } from './styles';
import { Subscription } from 'expo-sensors/build/Pedometer';
import wspolrzedne from './Vertical.interface';

const Vertical: React.FC = () => {

  const babel = useRef();
  const [pozycja, setPozycja] = useState<wspolrzedne>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [animacja, setanimacja] = useState<Animated.ValueXY>(new Animated.ValueXY({ x: 0, y: 0 }));

  useEffect(()=>{
      const subscription: Subscription = Accelerometer.addListener((os) => {
        setPozycja({
          x: os.x,
          y: os.y,
          z: os.z,
        });
      });
  }, []);

  const { x, y, z }: wspolrzedne = pozycja;
  let kat_lewo_prawo: number = (Math.atan2(z, x) * (180 / Math.PI) - 90); //86
  let kat_gora_dol: number = (Math.atan2(z, y) * (180 / Math.PI) - 90);

  // if (Math.abs(kat_lewo_prawo) < 1 && Math.abs(kat_gora_dol) < 1) {
  //   kat_lewo_prawo = 0;
  //   kat_gora_dol = 0;
  // }

  const speed: number = 10;
  const translateX: number = kat_lewo_prawo * speed;
  const translateY: number = kat_gora_dol * speed;

  useEffect(()=>{
    Animated.timing(animacja, {
      toValue: { x: translateX, y: -translateY },
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [translateX, translateY]);

  return (
    <>
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image}>
      <View style={styles.container}>
        <View style={[styles.line, styles.horizontal]} />
        <View style={[styles.line, styles.vertical]} />
        
        <Animated.Image source={require('./assets/pokemony/pokemon1.png')} ref={babel} style={[styles.bubble, { transform: animacja.getTranslateTransform() }]} /> 
          
        <Image source={require('./pokeball.png')}  style={styles.frame}/>
        <Text style={styles.text}>Y: {Math.round(kat_lewo_prawo)}°</Text>
        <Text style={[styles.text, { marginTop: 150 }]}>X: {Math.round(kat_gora_dol)}°</Text>
        
      </View>
    </ImageBackground>
    </>
  );
}

export default Vertical;