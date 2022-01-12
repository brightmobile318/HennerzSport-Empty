import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        paddingHorizontal: '5%'
    },
    titleLabel: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        // fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        marginBottom: 24,
        marginTop: 20,
    },
    headerPane: {
        backgroundColor: '#707070',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 28,
        marginHorizontal: '5%',
        borderRadius: 28
    },
    headerButton: {
        width: 120,
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 28
    },
    headerActiveButton: {
        width: 120,
        backgroundColor: '#007a78',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 28
    },
    subTitleLabel: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: '10%',
        fontFamily: 'Lato-Regular'
    }
})
