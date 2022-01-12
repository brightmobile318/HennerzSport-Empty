import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../../colors';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: Theme.colors.background,
     },
     container_header: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 50,
          paddingHorizontal: '5%'
     },
     cameraView: {
          width: '100%',
          height: windowHeight
     },
     takePhotoButton: {
          width: '100%',
          height: 45,
          borderRadius: 23,
          borderColor: 'white',
          borderWidth: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
     },
     backButton: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row'
     },
     buttonGroup: {
          display: 'flex',
          position: 'absolute',
          bottom: 80,
          width: '100%'
     },
     takeButton: {
          display: 'flex',
          width: '90%',
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 23,
          borderColor: 'white',
          height: 45,
          alignItems: 'center',
          justifyContent: 'center'
     },
     retakeButton: {
          display: 'flex',
          width: '90%',
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 23,
          borderColor: 'white',
          backgroundColor: Theme.colors.blue,
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
     },
     previewImage: {
          width: '100%',
          height: '100%'
     },
     previewButtonGroup: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'absolute',
          width: '90%',
          bottom: 50
     },
     previewContainer: {
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
     }
})