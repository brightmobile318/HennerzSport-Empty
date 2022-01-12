import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tipPane: {
        width: '100%',
        left: '10%',
        borderWidth:2,
        borderColor: '#007A78',
        borderRadius: 50,
        flexDirection:'row',
        paddingLeft:10,
        backgroundColor: '#484848',
        marginBottom: 10,
        alignItems: 'center',
        padding: 12,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    avatatImage: {
        marginRight: 20,
        borderRadius: 100
    },
    nameStyle: {
        color:'white',
        fontFamily: 'Lato-Regular',
        fontSize: 16
    },
    sportsStyle: {
        color:'white',
    },
    changeButton: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Lato-Regular',
        borderBottomWidth:1,
        borderBottomColor: 'white',
    },
});