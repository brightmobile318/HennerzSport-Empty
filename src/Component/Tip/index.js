import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from './Tip.style';

export default class TipComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    touch = () => {
        this.props.onSelect(this.props.id);
    }

    render() {
        const { selected } = this.props;
        const { id, name, sports, avatar} = this.props;
        return(
            <TouchableOpacity style={[styles.tipPane, selected == id ? {borderColor: '#007A78', borderWidth: 2} : {}]} onPress={() => this.touch()}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.avatatImage}>
                        <Image source={{ uri: avatar}} style={{width: 40, height: 40, resizeMode: 'contain'}}></Image>
                    </View>
                    <View style={styles.componentBody}>
                        <Text style={styles.nameStyle}>{ name }</Text>
                        <Text style={styles.sportsStyle}>{ sports }</Text>
                    </View>
                </View>
                <TouchableOpacity style={{width: 31, height: 31, borderWidth: 2, borderColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.touch()}>
                    {
                        selected == id ? <View style={{width: 20, height: 20, backgroundColor: '#007A78', borderRadius: 20}}></View> : null
                    }
                </TouchableOpacity>                
            </TouchableOpacity>
        );
    }
}