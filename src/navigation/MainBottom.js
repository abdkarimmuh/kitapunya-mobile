import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation";
import { Image } from "react-native";
import { Text, HeaderDetail } from "@app/components";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";

import { HistoryScreen, ProfileScreen } from "@app/screens";
import MainStack from "./MainStack";

const Label = ({ text }) => (
    <Text style={{ fontSize: 12, color: Color.textColor, textAlign: "center", fontWeight: "bold" }}>
        {text}
    </Text>
);

const TabIcon = ({ name }) => ({ focused }) => {
    if (name == "home") {
        if (focused) {
            icon = Images.icon.home_active
        } else {
            icon = Images.icon.home
        }
    } else if (name == "archive") {
        if (focused) {
            icon = Images.icon.archive_active
        } else {
            icon = Images.icon.archive
        }
    } else if (name == "person") {
        if (focused) {
            icon = Images.icon.person_active
        } else {
            icon = Images.icon.person
        }
    }
    return (
        <Image source={icon} style={{ width: 24, height: 24, resizeMode: "cover" }} />
    )
};

const HistoryStack = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Riwayat</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white,
                headerTintColor: Color.textColor,
            }
        }
    }
});

const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Profil</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white,
                headerTintColor: Color.textColor,
            }
        }
    },
})

export default createMaterialBottomTabNavigator(
    {
        Home: {
            screen: MainStack,
            navigationOptions: {
                tabBarLabel: <Label text={"Beranda"} />,
                tabBarIcon: TabIcon({ name: "home" })
            }
        },
        History: {
            screen: HistoryStack,
            navigationOptions: {
                tabBarLabel: <Label text={"Riwayat"} />,
                tabBarIcon: TabIcon({ name: "archive" })
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: <Label text={"Profil"} />,
                tabBarIcon: TabIcon({ name: "person" })
            }
        },
    },
    {
        shifting: true,
        barStyle: { backgroundColor: Color.white },
    }
);
