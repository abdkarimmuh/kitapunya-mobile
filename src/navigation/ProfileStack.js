import React from "react";
import { HeaderDetail } from "@app/components";
import { AboutUsScreen, ChangePasswordScreen, EditProfileScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default {
    AboutUs: {
        screen: AboutUsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
    ChangePassword: {
        screen: ChangePasswordScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
    EditProfile: {
        screen: EditProfileScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderDetail>{navigation.getParam("title")}</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white
            },
            headerTintColor: Color.textColor,
        })
    },
}