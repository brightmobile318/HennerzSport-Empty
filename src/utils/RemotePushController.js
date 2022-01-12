import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { backend_url } from '../../server';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PUSH_ENDPOINT = backend_url + "/token/" + Platform.OS;

const RemotePushController = (props) => {
    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                const req = fetch(PUSH_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: {
                            value: token.token,
                        }
                    }),
                });
            },

            // (required) Called when a remote or local notification is opened or received
            onNotification: async function (notification) {
                const autherized = await AsyncStorage.getItem('autherized')
                // props.navigation.navigate('Notification')
                // process the notification here
                notification.finish(PushNotificationIOS.FetchResult.NoData)
                props.navigation.navigate('FeedScreen')
            },
            onRegistrationError: function (err) {
                console.error(err.message, err)
            },
            //IOS only
            permissions: {
                alert: true,
                badge: false,
                sound: true
            },
            // Android only: GCM or FCM Sender ID
            senderID: '709872223157',
            popInitialNotification: true,
            requestPermissions: true
        })
    }, [])

    return null
}

export default RemotePushController