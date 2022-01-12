import { StyleSheet } from 'react-native';
// import { Theme } from '../../../colors';

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'black',
          paddingHorizontal: '5%'
     },
     container_top: {
          flex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
     },
     container_bottom: {
          flex: 1
     },
     container_button_group: {
          
     },
     container_text_policy: {
          
     },
     container_button: {
          height: 45,
          width: '100%',
          backgroundColor: '#007A78',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
          borderRadius: 23
     },
     container_button_outline: {
          height: 45,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
          borderRadius: 23,
          borderColor: '#007A78',
          borderWidth: 2
     },
     text_button: {
          fontSize: 16,
          fontFamily: 'Lato',
          color: '#fff'
     },
     container_text_policy: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: 40,
     },
     text_normal: {
          fontSize: 12,
          color: 'white',
          fontFamily: 'varela-round'
     },
     text_bold: {
          fontSize: 12,
          color: 'white',
          fontWeight: 'bold',
          marginLeft: 5,
          fontFamily: 'varela-round'
     }
})