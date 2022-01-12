import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: null
        }
    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    style={ styles.inputStyle }
                    onChangeText={text => this.props.onChange(text)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#979797',
        fontSize: 16,
        padding: 12,
        paddingLeft: 20,
        fontFamily: 'Lato-Regular',
        color: '#278e8e',
    },   
});
