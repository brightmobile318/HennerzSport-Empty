import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';
import { styles } from './Setting.style';
import SettingComponent from '../../Component/Setting';
import FeedbackComponent from '../../Component/Feedback';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SettingScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSelectedMain: 0,
            // notification: true,
            // faceId: true,
            // touchId: true,
        }
    };
    
    async componentDidMount() {
        const notification = await AsyncStorage.getItem('notification');
        const face = await AsyncStorage.getItem('faceId');
        const touch = await AsyncStorage.getItem('touchId');
        this.setState({
            notification: notification && notification  === 'enabled' ? true : false,
            faceId: face && face === 'enabled' ? true : false,
            touchId: touch && touch === 'enabled' ? true : false
        });
   }

    _showFeedback = () => {
        this.setState({isSelectedMain: 1});
    }

    _backToSetting = () => {
        this.setState({isSelectedMain: 0});
    }

    onSelect = async (label, value) => {
        if(value === true) {
            await AsyncStorage.setItem(label, 'enabled');
        } else {
            await AsyncStorage.setItem(label, 'disabled');
        }
        if(label === 'notification') {
            this.setState({
                notification: value
            });
        }
        if(label === 'faceId') {
            this.setState({
                faceId: value
            });
        }
        if(label === 'touchId') {
            this.setState({
                touchId: value
            });
        }
    }

    _cancelSubscription = (name) => {
        if(name === 'Cancel Subscription') {
            this.props.navigation.navigate('CancelSubscription');
        }
    }

    settingFunc = (name) => {

    }

    render() {
        const { notification, faceId, touchId } = this.state;
        
        return(
            <View style={styles.container}>
            {
                this.state.isSelectedMain === 0 ?
                <View>
                    <View>
                        <Text style={styles.titleLabel}>Settings</Text>
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.machineOwner}>John Smith</Text>
                        <Text style={styles.machineID}>Member ID: 123456789</Text>
                    </View> 
                    <View style={styles.SettingContainer}>
                        <SettingComponent iconName="bell" functionName="Notifications" selectable="avaliable" onSelect={param => this.onSelect("notification", param)} isActive={notification} />
                        <SettingComponent iconName="fingerprint" functionName="Touch ID" selectable="avaliable" onSelect={param => this.onSelect("touchId", param)} isActive={touchId} />
                        <SettingComponent iconName="face-recognition" functionName="Face ID" selectable="avaliable" onSelect={param => this.onSelect("faceId", param)}isActive={faceId} />
                        <SettingComponent iconName="file-table-box" functionName="Plans" runFunction={ (name) => this.settingFunc(name) } />
                        <SettingComponent iconName="logout" functionName="Cancel Subscription" runFunction={ (name) => this._cancelSubscription(name) } />
                        <SettingComponent iconName="wechat" functionName="Help & Support"  runFunction={ (name) => this.settingFunc(name) } />
                        <SettingComponent iconName="pen" functionName="Give Feedback" runFunction={ this._showFeedback }/>
                        <SettingComponent functionName="Terms and Condition" runFunction={ (name) => this.settingFunc(name) } />
                        <SettingComponent functionName="Privacy Policy" runFunction={ (name) => this.settingFunc(name) } />
                    </View>
                </View> : null

            }
            {
                this.state.isSelectedMain === 1?
                <View style={styles.FCcontainer}>
                    <FeedbackComponent title="We are sorry to see you go" backFunction={this._backToSetting}/>
                </View> : null
            }
            </View>
        );
    }
}

export default SettingScreen;


