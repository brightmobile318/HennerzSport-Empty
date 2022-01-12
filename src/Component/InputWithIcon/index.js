import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './InputWithIcon.style';

export default class InputWithIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: null,
            isVisible: false,
        }
    }

    clickEye = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    onChange = (text) => {
        this.props.onChange(text);
    }

    render() {
        const { isValidPassword } = this.props;

        return (
            <View style={styles.inputContainer}>
                <View style={ styles.inputPane } >
                    <View style={ styles.firstPane } >
                        <TextInput 
                            placeholder= {this.props.placeholder}
                            secureTextEntry={ this.state.isVisible ? false : true }
                            style={styles.inputStyle}
                            onChangeText={text => this.onChange(text)}
                        />
                        {
                            this.state.isVisible === true ?
                                <Icon name='eye' color='black' size={20} style={ styles.inputIcon } onPress={this.clickEye} />
                            : null
                        }
                        {
                            this.state.isVisible === false ?
                                <Icon name='eye-slash' color='black' size={20} style={ styles.inputIcon } onPress={ this.clickEye }/>
                            : null
                        }                        
                    </View>
                    <View style={ styles.secondPane }>
                        <Text style={ isValidPassword[0] ? styles.trueTooltipText : styles.tooltipText}>At least 6 characters</Text>
                        <Text style={ isValidPassword[1] ? styles.trueTooltipText : styles.tooltipText}>At least 1 uppercase letter</Text>
                        <Text style={ isValidPassword[2] ? styles.trueTooltipText : styles.tooltipText}>At least 1 digit</Text>
                    </View>
                </View>
            </View>
        )
    }
}
