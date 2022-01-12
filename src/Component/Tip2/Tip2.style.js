import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // TipComponent start
    tipPane: {
        width: '100%',
        borderWidth: 2,
        borderRadius:50,
        flexDirection:'row',
        padding: 10,
        backgroundColor: '#484848',
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatatImage: {
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        overflow: 'hidden',
        borderColor: '#fff',
        borderWidth: 0,
        backgroundColor: '#fff'
    },
    componentBody: {
        width: 320, 
    },
    nameStyle: {
        fontFamily: 'Lato-Regular',
        color:'white',
        fontSize: 16
    },
    sportsStyle: {
        fontFamily: 'Lato-Regular',
        color:'white',
        fontSize: 12
    },
    touchStyle:{
        borderWidth : 2,
        borderColor : 'grey',
        borderRadius : 20,
        width : 40,
        height : 40,
    },
    focusTouch: {
        borderWidth : 2,
        borderColor : 'grey',
        borderRadius : 20,
        width : 40,
        height : 40,
        backgroundColor : '#007a78',
    },
    // TipComponent end
});