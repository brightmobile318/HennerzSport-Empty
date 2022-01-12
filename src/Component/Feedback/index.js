import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { styles } from './Feedback.style';
import logoImage from '../../../assets/img/mini_logo.png';
import smlogo from '../../../assets/img/logo_sm.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from 'react-native-button';

// import logoImage from '../../../assets/img/mini_logo';

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLock: true,
            isValid: null
        }
    }

    render() {
        return(
            <View>
                {
                    this.state.isLock === true ?
                    <View>
                        <TouchableOpacity style={ styles.FCReturnBoard } 
                            onPress={this.props.backFunction}
                        >
                            <Icon name='arrow-left-bold' size={ 32 } color="white" />
                            <Text style={ styles.FCReturnLabel }>Back to settings</Text>
                        </TouchableOpacity>
                        <View style={ styles.FCFeedbackBoard }>
                            <View style={ styles.FCFeedbackHeader }>
                                <Image source={ logoImage } style={ styles.FCLogo }/>
                                <Text style={ styles.FCTitle }>{ this.props.title }</Text>
                            </View>
                            <View style={{width: '100%', marginLeft: '4%'}}>
                                <Text style={ styles.FCFeedbackLabel }>
                                All our customers can terminate their subscriptions at any given time. Due to Google Play and App Store regulations, Hennerz Bets is an application which will automatically sign you up for further membership once the old one has run out. If you wish to avoid being charged after your membership has expired, you can cancel your subscription through your Google Play or App Store settings. However, we recommend that you try and work with us in a long term plan, in order to be able to accumulate even bigger profits. Hennerz Bets cannot be held accountable for any misinformation on behalf of its clients in relation to monthly subscriptions.
                                Finally, please gamble responsibly. www.begambleaware.org
                                </Text>
                            </View>
                        </View>
                    </View> : null         
                }
                {
                    this.state.isLock === false ?
                    <View style={ styles.unlockPanel }>
                        <View style={ styles.unlockBoard }>
                            <Image source={ smlogo }  style={ styles.smLogoStyle }/>
                            <Text style={ styles.sorryLabel }>SORRY YOU HAVE BEEN LOCKED OUT!</Text>
                            <Text style={ styles.subscribeLabel }>It looks like your subscription has expired, please re-subscribe.</Text>
                        </View>
                        <Button style={ styles.subscribeButton }>Resubscribe</Button>
                    </View>: null
                }
            </View>
        )
    }
}