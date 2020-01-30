import React from "react";
import { HeaderDetail } from "@app/components";
import { MapsScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default {
    Maps: {
        screen: MapsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
}