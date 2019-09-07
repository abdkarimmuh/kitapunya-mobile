import {
    createStackNavigator
} from "react-navigation";
import { HomeScreen, ListDonationScreen, DetailDonationScreen, ListDonaturScreen, DonationScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default createStackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    ListDonation: {
        screen: ListDonationScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.getParam("title")}`,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        })
    },
    DetailDonation: {
        screen: DetailDonationScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.getParam("title")}`,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        })
    },
    ListDonatur: {
        screen: ListDonaturScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.getParam("title")}`,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        })
    },
    Donation: {
        screen: DonationScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.getParam("title")}`,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        })
    },
});