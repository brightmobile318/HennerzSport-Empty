import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: 'black',
     },
     container_header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        flexDirection: 'row',
        paddingHorizontal: '5%',
        paddingBottom: 20,
     },
     text_header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
     },
     container_body: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: '5%',
        paddingTop: 30
     },
     container_button: {
        height: 45,
        width: '100%',
        backgroundColor: '#007A78',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23
     },
     text_button: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
     },
     emailInput: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#979797',
        fontSize: 16,
        padding: 12,
        paddingLeft: 20,
        fontFamily: 'Lato-Regular',
        color: '#278e8e',
     }
})