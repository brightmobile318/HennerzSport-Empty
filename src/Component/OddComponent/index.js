import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from './Odd.style';

export default class OddComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            istouch : false,
        }
    }
    touch = () => {
        this.props.onSelect(this.props.id);
    }

    render() {
        const {id, name, selected } = this.props;

        return(
            <View style={ [styles.sportsContainer, selected == id ? {borderColor: '#007A78'} : {}] }>
                <Text style={{fontFamily: 'Lato-Regular'}}>{ name }</Text>
                <TouchableOpacity style={{width: 31, height: 31, borderWidth: 2, borderColor: '#484848', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.touch()}>
                    {
                        selected == id ? <View style={{width: 20, height: 20, backgroundColor: '#007A78', borderRadius: 20}}></View> : null
                    }
                </TouchableOpacity>
            </View>
        );
    }
}