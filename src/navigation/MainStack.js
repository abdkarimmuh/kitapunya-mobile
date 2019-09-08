import {
    createStackNavigator
} from "react-navigation";
import { HomeScreen, ListCampaignScreen, DetailCampaignScreen, DonationScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default createStackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    ListCampaign: {
        screen: ListCampaignScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.getParam("title")}`,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        })
    },
    DetailCampaign: {
        screen: DetailCampaignScreen,
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