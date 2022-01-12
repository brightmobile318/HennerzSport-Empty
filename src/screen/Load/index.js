import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
import Toast from 'react-native-easy-toast'
import { backend_url } from '../../../server.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { styles } from './Load.style';
import { connect } from 'react-redux';
import logo_url from '../../../assets/img/logo_second.png';

class LoadScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    _goPolicy = async () => {
        const url = "https://www.hennerzbets.com/app-privacy-policy";
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }

     _goTerms = async () => {
        const url = 'https://www.hennerzbets.com/app-terms';
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }

     _goLogin = async () => {
          try {

               const face = await AsyncStorage.getItem('face')
               const finger = await AsyncStorage.getItem('finger')
               const isChecked = await AsyncStorage.getItem('isChecked')


               if (isChecked && isChecked === 'true') {
                    this.callApiWithEmail()
               } else {
                    this.props.navigation.navigate('SignIn')
               }
          } catch (error) {
               this.toast.show(error);
          }
     }

     callApiWithEmail = async () => {
          const email = await AsyncStorage.getItem('email');
          const password = await AsyncStorage.getItem('password');

          if (email && password && email.length > 0 && password.length > 0) {
               this.setState({ isLoading: true })
               const request = await fetch(`${backend_url}/login`,
                    {
                         method: 'POST',
                         headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({
                              email: email.toLowerCase(),
                              password: password
                         })
                    }
               );
               let responseJson = await request.json();
               if (request.status === 200) {
                    this.setState({ isLoading: false })
                    if (responseJson.ok) {
                         this.props.setUserData(responseJson.data)
                         this.props.navigation.navigate('FeedScreen')
                    } else {
                         if (responseJson.subscription === false) {
                              await AsyncStorage.setItem('email', '')
                              await AsyncStorage.setItem('password', '')
                              await AsyncStorage.setItem('isChecked', '')
                              this.props.navigation.navigate('LogoutScreen', { email: email, password: password })
                         } else {
                              await AsyncStorage.setItem('email', '')
                              await AsyncStorage.setItem('password', '')
                              await AsyncStorage.setItem('isChecked', '')
                              this.toast.show(responseJson.msg);
                              this.props.navigation.navigate('SignIn')
                         }
                    }
               } else {
                    this.setState({ isLoading: false })
                    await AsyncStorage.setItem('email', '')
                    await AsyncStorage.setItem('password', '')
                    await AsyncStorage.setItem('isChecked', '')
                    this.toast.show(responseJson.msg);
                    this.props.navigation.navigate('SignIn')
               }
          } else {
               await AsyncStorage.setItem('email', '')
               await AsyncStorage.setItem('password', '')
               await AsyncStorage.setItem('isChecked', '')
               this.props.navigation.navigate('SignIn')
          }
     }

     _goSignup = () => {
          this.props.navigation.navigate('Signup');
     }

     render() {
          return (
                <View style={styles.container}>
                    <Spinner
                         visible={this.state.isLoading}
                    />
                    <View style={styles.container_top}>
                         <Image source={logo_url}></Image>
                    </View>
                    <View style={styles.container_bottom}>
                         <View style={styles.container_button_group}>
                              <TouchableOpacity style={styles.container_button}
                                   onPress={this._goSignup}
                              >
                                   <Text style={styles.text_button}>Sign Up</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.container_button_outline}
                                   onPress={this._goLogin}
                              >
                                   <Text style={styles.text_button}>Sign In</Text>
                              </TouchableOpacity>
                         </View>
                         <View style={styles.container_text_policy}>
                              <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                   <Text style={styles.text_normal}>By joining you agree to ours</Text>
                                   <TouchableOpacity onPress={this._goTerms}>
                                        <Text style={styles.text_bold}>Terms of Service</Text>
                                   </TouchableOpacity>
                              </View>
                              <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                   <Text style={styles.text_normal}>and</Text>
                                   <TouchableOpacity onPress={this._goPolicy}>
                                        <Text style={styles.text_bold}>Privacy Policy</Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
                    <Toast ref={(toast) => this.toast = toast} />
               </View>
          )
     }
}

const mapStateToProps = (state) => {
     return {
          userData: state.userData,
     }
}

const mapDispatchToProps = dispatch => {
     return {
          setUserData: (val) => {
               dispatch({ type: 'set', userData: val })
          }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadScreen)