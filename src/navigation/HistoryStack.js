import React from "react";
import { HeaderDetail } from "@app/components";
import { DetailHistoryScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default {
    DetailHistory: {
        screen: DetailHistoryScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
}