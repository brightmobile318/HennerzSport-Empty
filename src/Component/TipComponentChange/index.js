import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from './TipComponentChange.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TipComponentChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { selected } = this.props;
        return(
        <View style={styles.tipPane}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{borderWidth: 1, borderColor: '#fff', borderRadius: 30, overflow: 'hidden', marginRight: 10}}>
                    <Image source={{uri: selected.url}} style={{width: 40, height: 40, resizeMode: 'contain'}}></Image>
                </View>
                <View >
                    <Text style={styles.nameStyle}>{ selected.username }</Text>
                </View>
            </View>
            <TouchableOpacity ><Text style={styles.changeButton} onPress={ this.props.changeFunction }> Change </Text></TouchableOpacity>
        </View>
        );
    }
}
