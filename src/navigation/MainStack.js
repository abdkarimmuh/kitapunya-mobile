import React from "react";
import { createStackNavigator } from "react-navigation";
import { HeaderDetail } from "@app/components";
import { HomeScreen, ListCampaignScreen } from "@app/screens";
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
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
});