import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        paddingHorizontal: '5%'
    },
    detailTipHeader: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    detailTipRightHeader: {
        flexDirection: 'row',
        marginLeft: 220,
        alignItems: 'center',
    },
    detailTipName: {
        color: 'white',
        marginRight: 8,
        fontFamily: 'Lato-Regular',
    },
    detailTipDateTimeLabel: {
        width: '100%',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        marginTop: 12,
        marginBottom: 4,
    },
    detailTipTeamLabel: {
        width: '100%',
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 32,
    },
    detailTipNavButtonPane: {
        marginTop: 12,
        marginBottom: 32,
        flexDirection: 'row',
        backgroundColor: '#707070',
        borderRadius: 28,
        flexDirection: 'row',
    },
    detailTipNavButton: {
        width: 180,
        borderWidth: 1,
        borderRadius: 28,
        borderColor: 'transparent',
        color: 'white',
        padding: 12,
    },
    detailTipNavActiveButton: {        
        width: 180,
        borderWidth: 1,
        borderRadius: 28,
        borderColor: '#007a78',
        backgroundColor: '#007a78',
        color: 'white',
        padding: 12,
    },
    detailTipConstPane: {
        marginBottom: 24,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    detailTipoddPane: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#007a78',
        width: '48%',
        borderRadius: 8,
    },
    detailTipoddLabel: {
        padding: 8,
        fontFamily: 'Lato-Regular',
        color: 'white',
        fontSize: 16,
    },
    detailTipoddValue: {
        padding: 8,
        fontFamily: 'Lato-Regular',
        color: 'white',
        textAlign: 'right',
        fontSize: 16,
    },
    detailTipReturnLabel: {
        width: '100%',
        borderWidth: 1,
        fontFamily: 'Lato-Regular',
        borderRadius: 8,
        borderColor: 'grey',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        padding: 8,
    },
    detailTipContent: {
        width: '100%',
        marginTop: 20,
        alignItems: 'stretch'
    },
    detailTipContentLabel: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginBottom: 16,
    },
    bettingticketPane: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'        
    },
    bettingticketImage: {
        width: '70%',
        height: 350,
        marginVertical: 28,
        borderWidth: 1,
        // borderColor: '#fff'
    },
    betButton: {
        color: 'white',
        backgroundColor: '#007a78',
        width: 120,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});