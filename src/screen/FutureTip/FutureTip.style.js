import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        width: '60%',
        backgroundColor: '#484848',
        borderRadius: 25,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    titleLabel: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 20,
    },
    headerActiveButton: {
        color: 'white',
        backgroundColor: '#007a78',
        borderRadius: 25,
        width: 145,
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 8,
    },
    headerButton: {
        color: 'white',
        width: 145,
        borderRadius: 25,
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 8,
    },
    notificationContainer: {
        width: '96%',
        marginTop: 40
    },
    notificationHeader: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    winnerLabel: {
        width: '25%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    winnergoldLabel: {
        width: '25%',
        textAlign: 'center',
        color: 'gold',
        fontWeight: 'bold',
    },
  
//refine
    refineheaderImage: {
        width: '100%',
    },
    refineContainer: {
        backgroundColor: 'white',
        width: '100%',
        maxHeight: 550,
        marginTop: -100,
        paddingHorizontal: '5%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    refineHeader: {

    },
    crossPane: {
        width: '100%',
        // textAlign: 'right',
        alignItems: 'flex-end',
    },
    closeIcon: {
        marginTop:12,
    },
    refineBody: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    refineNavPane: {
        flexDirection: 'row',
        marginBottom: 16,
        marginTop: 16,
        backgroundColor: '#484848',
        width: '84%',
        borderRadius: 25,
    },
    refineNavActiveButton: {
        color:'white',
        width: 133.5,
        borderWidth:1,
        borderColor: '#007a78',
        paddingVertical: 8,
        backgroundColor: '#007a78',
        borderRadius: 25,
    },
    refineNavButton: {
        color:'white',
        width: 115,
        borderWidth:1,
        borderColor: 'transparent',
        paddingVertical: 8,
        borderRadius: 25,
    },
    refinePane: {
        height: 320,
        width: '100%'
    },
    refineFooter: {
        backgroundColor: '#afafaf',
        width: '100%',
        height: 80,
    },
// TipCardComponent start
    tipcardPane: {
        width: '100%',
        height: 203,
        marginBottom: 16,
        borderRadius: 8,
    },
    tipcardHeader: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
    },
    tipcardBody: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    datatime: {
        color: 'white',
        width: 260,
    },
    nameLabel: {
        color: 'white',
        width: 120,
        textAlign: 'right',
    },
    tipTitle: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 4,
        marginBottom: 8,
    },
    oddPane: {
        flexDirection: 'row',
        backgroundColor: '#007a78',
        width: '46%',
        marginLeft: '2%',
        marginRight: '2%',
        padding: 4,
        borderRadius: 8,
    },
    paneLabel: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        width:80,
        textAlign: 'left',
    },
    paneValue: {
        color: 'white',
        fontSize: 16,
        width: 100,
        textAlign: 'right',
    },
    tipcardFooter: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center',      
    },
    returnLabel: {
        color: 'white',
        width: 80,
        fontSize: 16,
    },
    footerLabel: {
        color: 'white',
        fontSize: 22,
    },
// TipCardComponent end
// TipsterComponent start
    tipsterContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 16,
        width: '90%',
        marginBottom: 12,
        padding: 8,
    },
    componentBody: {
        width: 330,
    },
// TipsterComponent end
// SportComponent start
    sportsContainer: {
        flexDirection: 'row',        
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#c9c9c9',
        width: '90%',
        marginBottom: 12,
        padding: 12,
    },
    touchStyle:{
        borderWidth:1,
        borderColor: 'grey',
        borderRadius: 20,
        width: 40,
        height: 40,
    },
// SportComponent end
// DetailTipComponent start
    detailTipHeader: {
        flexDirection: 'row',
        marginTop: 8,
    },
    detailTipRightHeader: {
        flexDirection: 'row',
        // marginLeft: 220,
    },
    detailTipName: {
        color: 'white',
        marginRight: 8,
    },
    detailTipConstPane: {
        flexDirection: 'row',
    },
    detailTipDateTimeLabel: {
        width: '100%',
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 12,
        marginBottom: 4,
    },
    detailTipTeamLabel: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 32,
    },
    detailTipNavButtonPane: {
        marginTop: 12,
        marginBottom: 32,
        flexDirection: 'row',
        backgroundColor: 'grey',
        width: '80%',
        // left: '8%',
        borderRadius: 28,
        flexDirection: 'row',
    },
    detailTipNavButton: {
        width: 192,
        borderWidth: 1,
        borderRadius: 28,
        borderColor: 'transparent',
        color: 'white',
        padding: 12,
    },
    detailTipNavActiveButton: {
        width: 192,
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
    },
    detailTipoddPane: {
        flexDirection: 'row',
        backgroundColor: '#007a78',
        width: '40%',
        // marginLeft: '7%',
        flexDirection:'row',
        borderRadius: 8,
    },
    detailTipoddLabel: {
        padding: 8,
        color: 'white',
        width: 100,
        fontSize: 16,
    },
    detailTipoddValue: {
        padding: 8,
        color: 'white',
        width: 88,
        textAlign: 'right',
        fontSize: 16,
    },
    detailTipReturnLabel: {
        // left: '8%',
        width: '84%',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'grey',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        padding: 8,
    },
    detailTipContent: {
        // left: '12%',
        width: '76%',
        marginTop: 20,
    },
    detailTipContentLabel: {
        color: 'white',
        fontSize: 14,
        marginBottom: 16,
    },
// DetailTipComponent end
})
