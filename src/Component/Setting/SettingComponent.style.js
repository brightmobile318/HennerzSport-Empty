// SettingComponent style

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    SettingComponentPane: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    SettingComponentIcon:{
        width: 36,
    },
    SettingComponentFunctionPane: {
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderBottomColor: 'grey',
        width: '90%',
        paddingBottom: 8,
        justifyContent: 'space-between'
    },
    SettingComponentFunctionName: {
        marginLeft: 12,
        color: 'white',
        fontFamily: 'Lato-Regular',
        width: 300,
        fontSize: 18,
    },
    SettingComponentSelectBoard:{
        flexDirection: 'row',
        width: 61,
        height: 32,
        borderRadius: 22,
        position: 'relative'
    },
    SettingComponentNoSelect: {
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 20,
        width: 30,
        height: 30,
        backgroundColor: 'transparent',
    },
    SettingComponentSelect: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        position: 'absolute',
        top: 1
    },
});
