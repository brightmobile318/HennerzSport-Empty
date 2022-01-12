import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
    },
    titleLabel: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        // fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        marginTop: 32,
    },
    headerContainer: {
        backgroundColor: 'grey',
        width: '90%',
        left: '5%',
        marginTop: 12,
        textAlign: 'center',
        borderRadius: 24,
    },
    machineOwner: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        // fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        marginTop: 12,
    },
    machineID: {
        width: '100%',
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        marginBottom: 12,
    },
    SettingContainer: {
        width: '100%',
        paddingHorizontal: '5%',
        marginTop: 32,
        // backgroundColor: 'red'
    },
});
