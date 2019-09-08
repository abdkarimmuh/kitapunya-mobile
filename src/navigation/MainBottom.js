import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation";
import { Text, HeaderDetail } from "@app/components";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "@app/assets/colors";

import { HistoryScreen } from "@app/screens";
import MainStack from "./MainStack";
import ProfileStack from "./ProfileStack";

const activeTintLabelColor = "#fff";
const inactiveTintLabelColor = Color.white25;

const Label = ({ text }) => (
    <Text style={{ fontSize: 10, color: activeTintLabelColor, textAlign: "center" }}>
        {text}
    </Text>
);

const TabIcon = ({ name }) => ({ focused }) => (
    <Icon
        name={name}
        color={focused ? activeTintLabelColor : inactiveTintLabelColor}
        size={24}
    />
);

const HistoryStack = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Riwayat</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.primaryColor,
                headerTintColor: "#fff"
            }
        }
    }
});

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
                tabBarIcon: TabIcon({ name: "history" })
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: <Label text={"Profil"} />,
                tabBarIcon: TabIcon({ name: "user" })
            }
        },
    },
    {
        shifting: true,
    }
);
