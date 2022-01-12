import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// TipsterComponent start
    tipsterContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        width: '100%',
        marginBottom: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#484848',
        alignItems: 'center',
    },
    avatarImage: {

    },
    isAdd_Panel:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tipsterName: {
        width: '70%',
        marginLeft: 12,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        width: 280
    },
    noAdd_tipsterName:{
        width: '70%',
        marginLeft: 12,
        color: 'white',
        fontSize: 16,
        width: 220,
    },
    addButton: {
        color: 'white',
        backgroundColor: '#007a78',
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 8,
    },
    onTouch:{
        borderWidth:1,
        borderColor: 'grey',
        backgroundColor:'white',
    },
    tipster_today:{
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#c9c9c9',
        borderRadius: 40,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    componentBody_today:{
        width: 320,
    },
    touchStyle:{
        borderWidth : 2,
        borderColor: 'grey',
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    focusTouch : {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 20,
        width: 40,
        height: 40,
        backgroundColor: '#007a78',
    },
    subscribe:{
        borderWidth : 2,
        borderColor: 'white',
        borderRadius: 20,
        width: 36,
        height: 36,
    },
    focusSubscribe: {
        width: 40,
    },
    subscribeLabel:{
        fontFamily: 'Lato-Regular',
        color: 'white',
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
// TipsterComponent end
});
