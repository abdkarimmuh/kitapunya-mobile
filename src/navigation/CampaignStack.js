import React from "react";
import { HeaderDetail } from "@app/components";
import { DetailCampaignScreen, DonationScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default {
    DetailCampaign: {
        screen: DetailCampaignScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
    Donation: {
        screen: DonationScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
}