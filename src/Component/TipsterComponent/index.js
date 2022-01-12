import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Tipster.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from 'react-native-button';
import Radio, {RadioButton} from 'react-native-simple-radio-button';
var radio_props = [
    { radioValue: 1 },
];
export default class TipsterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    touch = () => {
        this.props.isTouch(this.props.data._id);
    }

    subscribe = () => {
        this.props.subscribe(this.props.data._id);
    }

    render() {
        const { isType, data, selected, isSubscribed } = this.props;
        const { _id, username, url, sport } = data;
        return(
            <View>
                {
                    isType == "refineTip" ? <View style={ [styles.tipster_today, selected == _id ? { borderColor: '#007A78' } : {}]}>
                                                <View style={styles.avatatImage}>
                                                    <Image source={{ uri: url}} style={{width: 40, height: 40, resizeMode: 'contain'}}></Image>
                                                </View>
                                                <View style={styles.componentBody_today}>
                                                    <Text style={{fontFamily: 'Lato-Regular'}}>{ username }</Text>
                                                    <Text style={{fontFamily: 'Lato-Regular'}}>{ sport }</Text>
                                                </View>
                                                <TouchableOpacity style={{width: 31, height: 31, borderWidth: 2, borderColor: '#484848', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.touch()}>
                                                    {
                                                        selected == _id ? <View style={{width: 20, height: 20, backgroundColor: '#007A78', borderRadius: 20}}></View> : null
                                                    }
                                                </TouchableOpacity>
                                            </View> : <View style={ styles.tipsterContainer }>
                                                <View style={styles.avatatImage}>
                                                    <Image source={{ uri: url}} style={{width: 40, height: 40, resizeMode: 'contain'}}></Image>
                                                </View>
                                                <View style={ styles.isAdd_Panel }>
                                                    <Text style={ styles.tipsterName }>{ username }</Text>
                                                    {
                                                        isSubscribed !== _id ? <Button style={ styles.addButton } onPress={ this.subscribe }>Add</Button> : <View><Text style={ styles.subscribeLabel }>Subscribed</Text></View>
                                                    }
                                                </View>         
                                            </View>
                }
            </View>
        );
    }
}