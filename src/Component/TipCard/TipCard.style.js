import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // TipCardComponent start
    tipcardPane: {
        width: '100%',
        height: 203,
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#979797'
    },
    tipcardHeader: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    tipcardBody: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    datatime: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        marginLeft: 10
    },
    nameLabel: {
        color: 'white',
        marginRight: 10,
        fontFamily: 'Lato-Regular',
        textDecorationLine: 'underline'
    },
    tipTitle: {
        color: 'white',
        width: '100%',
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 4,
        marginBottom: 8,
    },
    oddPane: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#007a78',
        width: '46%',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 4
    },
    paneLabel: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },
    paneValue: {
        color: 'white',
        fontSize: 16
    },
    tipcardFooter: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 10
    },
    returnLabel: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        width: 80,
        fontSize: 16,
    
    },
    footerLabel: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 22,
        // fontWeight: 'bold'
    },
    // TipCardComponent end
});