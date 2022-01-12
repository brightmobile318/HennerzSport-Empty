import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// FeedbackComponent start
    FCReturnBoard: {
        flexDirection: 'row',
        height: 100,
        paddingTop: 36,
        paddingLeft: 30,
    },
    FCReturnLabel: {
        color: 'white',
        paddingLeft: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 20,
    },
    FCFeedbackBoard: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        backgroundColor: '#333333',
        left: '8%',
        width: '84%',
        padding: 12,
        paddingRight: 40,
        marginBottom: 20,
        height: 650,
    },
    FCFeedbackHeader: {
        flexDirection: 'row',
        width: '100%'
    },
    FCLogo: {
        width: 59,
        height: 77,
        top: 12,
        left: 12,
    },
    FCTitle: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        lineHeight: 22,
        width: 140,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 40,
    },
    FCFeedbackLabel: {
        color: 'white',
        marginTop: 34,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        lineHeight: 23
    },
// FeedbackComponent end
    unlockPanel: {
        top: 80,
        left: '5%',
        width: '90%',
    },
    unlockBoard: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 24,
    },
    smLogoStyle: {
        marginTop: 40,
        marginBottom: 24,
    },
    sorryLabel: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        width: '90%',
        marginTop: 12,
    },
    subscribeLabel: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        width: '90%',
        marginTop: 12,
        marginBottom: 24,
    },
    subscribeButton: {
        marginTop: 20,
        padding: 12,
        color: 'white',
        borderWidth: 1,
        borderRadius: 32,
        fontFamily: 'Lato-Regular',
        backgroundColor: '#007a78',
    },
});
