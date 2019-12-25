import React from "react";
import { HeaderDetail } from "@app/components";
import { EditProfilScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default {
    EditProfile: {
        screen: EditProfilScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
}