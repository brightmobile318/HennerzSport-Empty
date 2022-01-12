import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';

// import Input from '../../component/Input';
// import InputWithIcon from '../../component/InputWithIcon';

import logo1Src from '../../../assets/img/logo_sm.png';
import logo2Src from '../../../assets/img/logo_second.png';

class WelcomeFaceIdScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 2,
            searchFlag: 0,
            isChecked: false,
        }
    };
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.container} 
                    // onPress
                >
                    <Image source={ logo1Src } style={ styles.logoStyle }/>
                    <Text style={ styles.logoText }>HIT BIGGER</Text>
                    <Image source={ logo2Src } />
                </TouchableOpacity>
            </View>
        );
    }
    
}

export default WelcomeFaceIdScreen;

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
