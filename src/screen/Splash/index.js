
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import logo from '../../../assets/img/Logo_First.png';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
        <Image source={ logo } style={ styles.logoStyle }/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        height: '100%',
    },
    logoStyle: {
        marginTop: '20%',
    },
});
