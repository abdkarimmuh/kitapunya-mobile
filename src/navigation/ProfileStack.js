import React from "react";
import { createStackNavigator } from "react-navigation";
import { HeaderDetail } from "@app/components";
import { ProfileScreen, EditProfilScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Profil</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.primaryColor,
                headerTintColor: "#fff"
            }
        }
    },
    EditProfile: {
        screen: EditProfilScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Edit Profil</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        }
    },
});