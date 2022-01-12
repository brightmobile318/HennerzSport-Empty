import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo1Src from '../../../assets/img/logo_sm.png';
import logo2Src from '../../../assets/img/logo_second.png';

export default function WelcomeScreen() {
    const { navigate } = useNavigation();

    useEffect(() => {
        setTimeout(function(){
            navigate('SignIn');
            // navigate('LoadScreen');
        }, 2500);
    });

    return(
        <TouchableOpacity style={styles.container} 
            onPress = { () => { navigate('Signup') } }
        >
            <Image source={ logo1Src } style={ styles.logoStyle }/>
            <Text style={ styles.logoText }>HIT BIGGER</Text>
            <Image source={ logo2Src } />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        height: '100%',
    },
    logoStyle: {
        marginTop: '25%',
    },

    logoText:{
        color:'white',
        paddingTop: 20,
        paddingBottom: 40,
        lineHeight: 29,
        fontSize: 24,
        fontWeight:'bold',
        fontFamily:'Lato',
    },

});
