import { StyleSheet } from 'react-native';
import Color from '@app/assets/colors';

export default StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
    },
    login: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 24
    },
    imgLogin: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    textInput: {
        marginBottom: 16
    },
    carouselContainer: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    menuContainer: {
        marginTop: 16,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 16,
    },
    menuItemContainer: {
        marginBottom: 16,
        height: 100,
        width: 100,
    },
    itemDonation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemDonationDetail: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    itemDescriptionDetail: {
        paddingTop: 8,
        paddingBottom: 8
    },
    headerDescription: {
        color: Color.primaryColor
    },
    textStatusHistory: {
        color: 'white',
        alignSelf: 'flex-start',
        paddingTop: 2,
        paddingTop: 2,
        paddingRight: 6,
        paddingLeft: 6,
    }
});