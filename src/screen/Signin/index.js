import React from 'react';
import { Component } from 'react';
import { Text, View, Image, TouchableOpacity,  } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Signin.style';
import { useNavigation, NavigationActions  } from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

import { backend_url } from '../../../server.js';
import Input from '../../Component/Input';
import InputWithIcon from '../../Component/InputWithIcon';


class SigninScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 4,
            searchFlag: 0,
            isChecked: false,
            email: '',
            password: '',
            isValidPassword: [false, false, false],
            isValid: false
        }
    };

    async componentDidMount() {
        const loginId = await AsyncStorage.getItem('id');
        if(loginId == null) {
            
        } else {
            this.props.navigation.navigate('BottomNav');
        }
    }

    emailChange = (text) => {
        const { isValidPassword } = this.state;
        this.setState({
            email: text
        });
        if(this.emailValidate(text) && isValidPassword[0] && isValidPassword[1] && isValidPassword[2]) {
            this.setState({
                isValid: true
            });
        }else{
            this.setState({
                isValid: false
            });
        }
    }

    passwordChange = (text) => {
        const { email } = this.state;
        let valid = [false, false, false];
        let exp1 = /[A-Z]/;
        let exp2 = /[0-9]/;
        if(text.length >= 6) {
            valid[0] = true;
        }
        if(exp1.test(text)) {
            valid[1] = true;
        }
        if(exp2.test(text)) {
            valid[2] = true;
        }
        this.setState({
            isValidPassword: valid
        });
        if(valid[0] && valid[1] && valid[2]) {
            this.setState({
                password: text
            });
        }
        if(this.emailValidate(email) && valid[0] && valid[1] && valid[2]) {
            this.setState({
                isValid: true
            });
        }else {
            this.setState({
                isValid: false
            });
        }
    }

    emailValidate = (email) => {
        const emailFormatter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailFormatter.test(String(email).toLowerCase());
    }

    signIn = async () => {
        const { email, password } = this.state;
        const request = await fetch(`${backend_url}/login`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );
        let responseJson = await request.json();
        if (request.status === 200) {
            this.setState({ isLoading: false })
            if (responseJson.ok) {
                await AsyncStorage.setItem('email', responseJson.data.email);
                await AsyncStorage.setItem('password', responseJson.data.password);
                this.props.navigation.navigate('BottomNav');
            } else {
                this.toast.show(responseJson.msg);
            }
        } else {
                this.setState({ isLoading: false })
                this.toast.show(responseJson.msg);
        }
    }

    validField = () => {
        const { isValid } = this.state;
        if(!isValid) {
            this.toast.show("Please input valid fields.");
        }
    }

    goForgot = () => {
        this.props.navigation.navigate('ForgotScreen');
    }

    render(){
        const { navigate } = this.props.navigation;
        const { isValid, isValidPassword } = this.state;

        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.isLoading}
                />
                <View style={styles.body}>
                    <View style={styles.bodyPane}>
                        <View>
                            <View style={styles.headerPad}>
                                <Text style={styles.signupLabel}>Sign in</Text>
                                <Button 
                                    style={styles.signinButton} 
                                    onPress={ () => { navigate('Signup') } }
                                >Sign Up</Button>
                            </View>
                            <View style={styles.commentPad}>
                                <Text style={styles.commentLabel}>You signed in with your twitter account the last time you signed in.</Text>
                            </View>
                            <View style={styles.iconGroup}>
                                <View style={styles.headerIcon}>
                                    <Icon name="facebook" size={ 40 } color="white"/>
                                </View>
                                <View style={styles.headerIcon}>
                                    <Icon name="twitter" size={ 40 } color="white"/>
                                </View>
                                <View style={styles.headerIcon}>
                                    <Icon name="instagram" size={ 40 } color="white"/>
                                </View>
                                <View style={styles.headerIcon}>
                                    <Icon name="google" size={ 40 } color="white"/>
                                </View>
                            </View>
                            <View style={styles.ORContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                                    <View style={styles.ORPane}>
                                        <Text style={styles.ORLabel}>OR</Text>
                                    </View>
                                    <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                                </View>
                            </View>
                        </View>

                        <View style={ styles.bodyContent }>                        
                            <Input 
                                onChange={text => this.emailChange(text)}
                                placeholder = "Email"
                            />
                            <View style={{height: 10}}></View>
                            <InputWithIcon 
                                placeholder = "Password"
                                isValidPassword = {isValidPassword}
                                onChange={text => this.passwordChange(text)}
                            />
                            <View style={{height: 10}}></View>
                            <Button style={ styles.forgetButton } onPress={this.goForgot}>Forgot password</Button>
                        </View>
                    </View>
                    <View style={ styles.footer }>
                        {
                            isValid ? <Button style={ styles.nextActiveButton } onPress={this.signIn}>Sign in</Button> : <Button style={ styles.nextButton } onPress={this.validField}>Sign in</Button>
                        }
                    </View>
                </View>
                <Toast ref={(toast) => this.toast = toast} />
            </View>
          );
    }

}
export default SigninScreen;

