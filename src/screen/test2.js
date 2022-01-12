import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Test2() {
    return(
        <TouchableOpacity style={styles.container} 
            // onPress
        >
            <Text style={ styles.logoText }>Test2</Text>
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
