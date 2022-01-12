import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';

export default function Test1() {
    return(
        <TouchableOpacity style={styles.container} 
            // onPress
        >
            <Text style={ styles.logoText }>test1</Text>
            <Button>go to test2</Button>
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
