import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast'
import { TextInput } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import { backend_url } from '../../../server.js';
import { styles } from './style';

class ForgotScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            isLoading: false
        }
    }

    componentDidMount() {
        StatusBar.setBarStyle('dark-content')
    }

    _goBack = () => {
        this.props.navigation.goBack();
    }

    _setEmail = (value) => {
        this.setState({ email: value });
    }

    _sendEmail = async () => {
        if (!this.state.email) {
            this.toast.show('Please type your email or username.');
            return
        }
        this.setState({ isLoading: true })
        const request = await fetch(`${backend_url}/forgotPassword`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email.toLowerCase(),
                })
            }
        );
        let responseJson = await request.json();
        if (responseJson.ok) {
            this.setState({ isLoading: false })
            const hiddenEmail = responseJson.email.split('@')
            const tempEmail = hiddenEmail[0].substring(hiddenEmail[0].length - 3, hiddenEmail[0].length)
            const securityEmail = "*****" + tempEmail + "@" + hiddenEmail[1]
            Alert.alert(
                "Success",
                `We sent the reset email to ${securityEmail}. Please check your mailbox.`,
                [
                    {
                        text: "OK", onPress: () => this.props.navigation.navigate('LoadScreen')
                    }
                ]
            )
        } else {
            this.setState({ isLoading: false })
            Alert.alert(
                "Error",
                `${responseJson.msg}`
            )
        }
    }

    render() {
        return <View style={styles.container}>
                <Spinner
                    visible={this.state.isLoading}
                />
                <View style={styles.container_header}>
                    <TouchableOpacity
                        onPress={this._goBack}
                    >
                    
                    </TouchableOpacity>
                    <Text style={styles.text_header}>Reset Password</Text>
                    <View style={{ width: 24 }}></View>
                </View>
                <View style={styles.container_body}>
                    <Text style={{ fontSize: 16, color: 'white', marginBottom: 30, fontFamily: 'varela-round' }}>Please type your email or username to reset your password.</Text>

                    <View>
                        <TextInput placeholder="Email / Username" type="email" onChangeText={this._setEmail} style={styles.emailInput}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 70 }}>
                        <TouchableOpacity style={styles.container_button}
                            onPress={this._sendEmail}
                        >
                            <Text style={styles.text_button}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Toast ref={(toast) => this.toast = toast} />
            </View>
    }
}

export default ForgotScreen;