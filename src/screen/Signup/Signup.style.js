import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        paddingHorizontal: '5%'
    },
    headerPad: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    signupLabel: {
        fontFamily: 'Lato-Regular',
        color: '#ffffff',
        fontSize: 24,
        // fontWeight: 'bold'
    },
    signinButton:{
        fontFamily: 'Lato-Regular',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: '#007a78',
        fontSize: 16,
        color: '#ffffff',
        alignItems: 'center'
    },
    commentPad: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'center',
    },
    commentLabel: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    iconGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    ORContainer: {
        alignItems: 'center',
        marginTop: 5,
        width: '100%'
    },
    ORPane: {
        width: 50, 
        height: 50,
        borderRadius: 30,
        backgroundColor: '#484848',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ORLabel: {
        color:'white',
        fontFamily: 'Lato-Regular',
        fontSize: 16
    },
    bodyPane1: {
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    bodyPane: {
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    footer: {
        width: '100%',
        flex: 3
    },
    policyPane:{
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
    },
    policyCheck: {
        borderColor: 'transparent',
        justifyContent: 'center',
    },
    touchCheck: {
        width: 30,
        height:30,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchCheck2:{
        width: 30,
        height:30,
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    policyLabel:{
        color: 'white',
        fontSize: 12,
        width: '80%',
        marginLeft: 20,
        marginTop: 8,
        fontFamily: 'Lato-Regular'
    },
    stepPane: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 1
    },
    privacypolicyPane:{
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    step: {
        backgroundColor: 'grey',
        borderWidth:1,
        borderColor:'black',
        borderRadius: 50,
        padding: 4,
        height: 40,
        width: 40
    },
    lastStep: {
        backgroundColor: '#215d5e',
        borderWidth: 1,
        borderColor: '#215d5e',
        borderRadius: 50,
        padding:    4,
        height: 40,
        width: 40
    },
    nowStep: {
        backgroundColor: '#3ca8aa',
        borderWidth:1,
        borderColor:'#3ca8aa',
        borderRadius: 50,
        padding: 4,
        height: 40,
        width: 40
    },
    normalLabel: {
        color: 'white',
    },
    underlineLabel: {
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    nextButton: {
        width: '100%',
        backgroundColor: '#c9c9c9',
        color: 'black',
        borderWidth:1,
        borderRadius: 30,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        padding: 12,
    },
    nextActiveButton:{
        width: '100%',
        backgroundColor: '#007a78',
        color: 'white',
        borderWidth:1,
        borderRadius: 30,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        padding: 12,
    },
    whichtipst: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        fontWeight:'bold',
        marginTop: 20
    },
    withtipst:{
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 40
    },
    pleasenote: {
        color:'white',
        fontFamily: 'Lato-Regular',
        fontSize:  12,
        marginTop: 10,
    },
    searchFil:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: 'grey',
        borderWidth:1,
        borderRadius: 35,
        marginBottom: 20,
        position:'relative'
    },
    buttonField: {

    },
    searchButton:{
        color:'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 14,
        paddingHorizontal: 18,
        borderRadius: 35,
        borderColor: 'transparent',
    },
    searchActiveButton:{
        color:'white',
        fontSize: 16,
        backgroundColor: '#007a78',
        padding: 14,
        paddingHorizontal: 18,
        borderRadius: 35,
        borderColor: '#007a78',
    },
    tipContainer:{
        width:'100%',
        paddingBottom: 10,
        marginBottom: 20
    },
    tipTick: {
        backgroundColor: 'grey',
        borderWidth:1,
        borderColor:'white',
        borderRadius: 50,
        padding: 4,
        width: '10%',
        height: 40
    },
    changeButton:{
        color: 'white',
    },
    bodyTitle: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 16,
        marginTop: 20,
    },
    payPane: {
        backgroundColor: '#007a78',
        width: '100%',
        textAlign:'center',
        borderRadius: 12,
        padding: 24,
    },
    payMethod: {
        width: '100%',
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
    },
    payAmount: {
        width: '100%',
        textAlign: 'center',
        color: '#f5cb28',
        fontSize: 24,
        fontFamily: 'Lato-Regular',
        marginTop: 24
    },
    payRate: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: 'white',
        fontSize: 20,
    },
    alertText: {
        color: 'white',
    },
    payButton: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#c9c9c9',
        color: 'black',
        borderWidth:1,
        borderRadius: 30,
        fontFamily:'Lato',
        fontSize: 20,
        padding: 12,
    },
    faceHeader: {
        width: '100%',
        height: 500,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        marginBottom: 20
    },
    faceDescriprion: {
        color: 'white',
        width: '50%',
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 12,
        marginBottom: 12,
    },
    faceFooter: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
        marginTop: 20
    },
    faceIDButton: {
        backgroundColor: '#007a78',
        borderColor:'#007a78',
        borderWidth: 1,
        fontSize: 20,
        color: 'white',
        borderRadius: 30,
        fontFamily: 'Lato-Regular',
        width: 400,
        padding: 12,
        marginBottom: 16,
    },
    notnowButton: {
        color: 'white',
        borderBottomColor: 'white',
        fontFamily: 'Lato-Regular',
        borderBottomWidth: 1,
        textAlign: 'center',
        width: '16%',
        fontSize: 16,
    },

});
