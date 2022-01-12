import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    notificationPane: {
        backgroundColor: 'white',
        padding:12,
        borderRadius: 8,
        marginBottom: 20,
    },
    notificationboard:{
        paddingHorizontal: 0
    },
    notificationDate: {
        fontSize: 18,
        paddingLeft: 8,
        fontFamily: 'Lato-Regular',
        color: '#004080',
    },
    notificationTime: {
        fontSize: 18,
        paddingRight: 40,
        color: '#004080',
        fontFamily: 'Lato-Regular',
    },
    notificationfocusDate: {
        fontSize: 18,
        paddingLeft: 8,
        color: '#007a78',
        fontFamily: 'Lato-Regular',
    },
    notificationfocusTime: {
        fontSize: 18,
        paddingRight: 40,
        color: '#007a78',
        fontFamily: 'Lato-Regular',
    },
    notiContainer: {
        padding: 14,
        lineHeight: 22,
        marginBottom: 20,
        fontFamily: 'Lato-Regular',
    },
    removeBtn: {
        borderRadius: 22,
        borderWidth:1,
        borderColor: '#007a78',
        fontFamily: 'Lato-Regular',
        color: 'black',
        fontSize: 14,
        padding: 12,
        left: '5%',
        width: '90%'
    },
});