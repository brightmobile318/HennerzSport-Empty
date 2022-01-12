import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import { Camera } from 'expo-camera';
import Toast from 'react-native-easy-toast'
import { backend_url } from '../../../server.js';

import { styles } from './Camera.style';
import { Theme } from '../../../colors';

const COULD_NAME = 'dnsgzfycz';
const API_KEY = '163677753582374';
const API_SECRET = 'Xn8oj9VZYE4woy6wZakrdnTehQU';
const PRESET_NAME = 'betting';

export default class CameraScreen extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               hasPermission: null,
               photo: null,
               isLoading: false,
               id: this.props.route.params.id
          }
     }

     async componentDidMount() {
          const { status } = await Camera.requestPermissionsAsync();
          if (status === 'granted') {
               this.setState({ hasPermission: true })
          } else {
               this.toast.show('Camera permission is not allowed');
          }
     }

     _goBack = () => {
          this.props.navigation.goBack()
     }

     _getPhoto = async () => {
          if (this.camera) {
               const photo = await this.camera.takePictureAsync()
               this.setState({ photo })
          }
     }

     _retakePhoto = () => {
          this.setState({ photo: null })
     }

     _uploadPhoto = async () => {
          this.setState({ isLoading: true })
          const photo = {
               uri: this.state.photo.uri,
               type: 'image/jpg',
               name: 'betting-image.jpg'
          }
          const data = new FormData()
          data.append('file', photo)
          data.append('upload_preset', 'betting')
          data.append('cloud_name', "dnsgzfycz")
          const response = await fetch(`https://api.cloudinary.com/v1_1/dnsgzfycz/upload`, {
               method: 'POST',
               body: data
          });
          let responseJson = await response.json();
          if (response.status === 200) {
               const request = await fetch(`${backend_url}/upload`,
                    {
                         method: 'POST',
                         headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({
                              id: this.state.id,
                              url: responseJson.url
                         })
                    }
               );
               let requestJson = await request.json();
               if (request.status === 200) {
                    this.setState({ isLoading: false })
                    if (requestJson.ok) {
                         // this.props.navigation.navigate('BettingSlipImageScreen', { 'photo': responseJson.url })
                         this.props.navigation.navigate('DayTipScreen')
                    } else {
                         this.toast.show(requestJson.msg);
                    }
               } else {
                    this.setState({ isLoading: false })
                    this.toast.show(requestJson.msg);
               }
          } else {
               this.setState({ isLoading: false })
               this.toast.show("Failed image uploading. Please try again.");
          }

     }

     render() {
          return (
               <View style={styles.container}>
                    <Spinner visible={this.state.isLoading || this.state.hasPermission === null} />
                    {
                         this.state.photo ?
                              <View style={styles.previewContainer}>
                                   <Image source={{
                                        uri: this.state.photo.uri
                                   }} style={styles.previewImage} />
                                   <View style={styles.previewButtonGroup}>
                                        <TouchableOpacity style={styles.takeButton} onPress={this._retakePhoto}>
                                             <Text style={{ color: 'white', fontSize: 16, fontFamily: 'varela-round' }}>Retake a Photo</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.retakeButton} onPress={this._uploadPhoto}>
                                             <Text style={{ color: 'white', fontSize: 16, fontFamily: 'varela-round' }}>Upload a Photo</Text>
                                        </TouchableOpacity>
                                   </View>
                              </View>
                              :
                              <Camera type={Camera.Constants.Type.back}
                                   style={styles.cameraView}
                                   autoFocus={'on'}
                                   ref={ref => {
                                        this.camera = ref;
                                   }}
                              >
                                   <View style={styles.container_header}>
                                        <TouchableOpacity style={styles.backButton} onPress={this._goBack}>
                                             <AntDesign name="left" size={24} color="white" />
                                             <Text style={{ color: 'white', fontSize: 20, fontFamily: 'varela-round' }}>Back</Text>
                                        </TouchableOpacity>
                                   </View>
                                   <View style={styles.buttonGroup}>
                                        <TouchableOpacity style={styles.takeButton} onPress={this._getPhoto}>
                                             <Text style={{ color: 'white', fontSize: 16, fontFamily: 'varela-round' }}>Take a Photo</Text>
                                        </TouchableOpacity>
                                   </View>
                              </Camera>
                    }
                    <Toast ref={(toast) => this.toast = toast} />
               </View>
          )
     }
}