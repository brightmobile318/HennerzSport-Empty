import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
    },
    inputPane: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
    },
    firstPane: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        justifyContent: 'space-between'
    },
    secondPane: {
        left: 12,
        paddingBottom: 12,
        padding: 8
    },
    inputStyle: {
        color: '#278e8e',
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '90%'
    },
    inputIcon: {
        paddingTop: 12,
        paddingRight: 12,
    },
    tooltipText: {
        fontFamily: 'Lato-Regular',
        fontSize: 14
    },
    trueTooltipText: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#278e8e'
    }
});
