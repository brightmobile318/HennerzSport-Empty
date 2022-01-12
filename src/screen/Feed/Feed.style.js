import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        paddingHorizontal: '5%'
    },
    titleLabel: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth:1,
        borderColor: '#007a78',
        borderRadius: 8,
        width: '100%',
        paddingLeft: 12,
        marginBottom: 20,
    },
    headerLabel: {
        color: 'white',
        fontSize: 20,
        marginTop:16,
        fontFamily: 'Lato-Regular',
        marginBottom: 16,
    },
    headerIconGroup: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
    },
    headerIcon: {
        marginRight: 16,
    },
    notificationContainer : {
        width: '100%'
    },
    clearButton: {
        color: 'white',
        width: 76,
        marginTop: 12,
        borderBottomWidth: 1,
        fontFamily: 'Lato-Regular',
        borderBottomColor: 'white'
    },
});