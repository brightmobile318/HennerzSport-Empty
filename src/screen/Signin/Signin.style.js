import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        paddingHorizontal: '5%'
    },
    headerPad: {
        width: '100%',
        marginTop: 40,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    signupLabel: {
        width: 126,
        height:46,
        color: '#ffffff',
        fontFamily:'Lato',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 29,
    },
    signinButton:{
        width: 110,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: '#007a78',
        fontSize: 16,
        color: '#ffffff',
        alignItems: 'center',
    },
    commentPad: {
        alignItems: 'center',
        width: '66%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    commentLabel: {
        height: 48,
        color: '#ffffff',
        fontFamily: 'Lato',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 4,
    },
    headerIcon: {

    },
    ORContainer: {
        alignItems: 'center',
        paddingVertical: 16,
        width: '90%',
        left: '5%',
    },
    ORPane: {
        width: 40, 
        height:40,
        borderRadius:20,
        backgroundColor: '#484848',
    },
    ORLabel: {
        color:'white',
        padding: 8,
    },
    body: {
        width: '100%',
    },
    bodyPane: {
        height: 700,
    },
    footer: {
        width: '100%',
    },
    forgetButton: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 26,
        fontSize: 16,
        padding: 12,
        width: '80%',
        left: '10%',
        color: 'white',
    },
    nextButton: {
        left: '10%',
        width: '80%',
        backgroundColor: '#c9c9c9',
        color: 'black',
        borderWidth:1,
        borderRadius: 30,
        fontFamily:'Lato-Regular',
        fontSize: 16,
        padding: 12,
    },
    nextActiveButton:{
        left: '10%',
        width: '80%',
        backgroundColor: '#007a78',
        color: 'white',
        borderWidth:1,
        borderRadius: 30,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        padding: 12,
    },
});
