import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from './SportComponent.style';

export default class SportComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPress: false,
            isType: true,
        }
    }

    touch = () => {
        this.props.onSelect(this.props.id);
    }

    render() {
        const { id, name, avatar, selected, isType} = this.props;

        return(
            <View style={{width: '100%'}}>
                {
                    isType === 'signup' ?
                    <TouchableOpacity style={[styles.tipPane, selected == id ? {borderColor: '#007A78', borderWidth: 2} : {}]}  onPress={() => this.touch()}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={ avatar } style={styles.avatatImage}></Image>
                            <View style={styles.componentBody}>
                                <Text style={styles.nameStyle}>{ name }</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: 31, height: 31, borderWidth: 2, borderColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.touch()}>
                            {
                                selected == id ? <View style={{width: 20, height: 20, backgroundColor: '#007A78', borderRadius: 20}}></View> : null
                            }
                        </TouchableOpacity> 
                    </TouchableOpacity> 
                    :
                    <View style={[styles.tipPane_today, selected == id ? {borderColor: '#007A78', borderWidth: 2} : {}]}>
                        <Image source={ avatar } style={styles.avatatImage} ></Image>
                        <View style={styles.componentBody_today}>
                            {
                                isType == 'refineTip' ? <Text style={styles.nameStyle_today1}>{ name }</Text> : null
                            }
                            {
                                isType == 'tipsterTip' ? <Text style={styles.nameStyle_today}>{ name }</Text> : null
                            }
                        </View>
                        <TouchableOpacity style={{width: 31, height: 31, borderWidth: 2, borderColor: '#484848', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.touch()}>
                            {
                                selected == id ? <View style={{width: 20, height: 20, backgroundColor: '#007A78', borderRadius: 20}}></View> : null
                            }
                        </TouchableOpacity>   
                    </View>
                }

            </View>
        );
    }
}