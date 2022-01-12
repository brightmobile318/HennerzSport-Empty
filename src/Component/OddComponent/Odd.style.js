import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sportsContainer: {
        flexDirection: 'row',        
        borderWidth: 2,
        borderRadius: 40,
        borderColor: '#c9c9c9',
        marginBottom: 12,
        paddingHorizontal: 8,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    touchStyle:{
        borderWidth:1,
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
});
