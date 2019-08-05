import React, { Component } from "react";
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation";
import { HistoryScreen, ProfileScreen } from "@app/screens";
import { HeaderDefault } from "@app/components";

import MainSctack from './MainStack';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Color from "@app/assets/colors";

const HistoryStack = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: {
            headerTitle: <HeaderDefault />,
            headerStyle: {
                backgroundColor: Color.primaryColor,
                headerTintColor: "#fff"
            }
        }
    }
});

const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: <HeaderDefault />,
            headerStyle: {
                backgroundColor: Color.primaryColor,
                headerTintColor: "#fff"
            }
        }
    }
});

const MainTab = createBottomTabNavigator(
    {
        Home: MainSctack,
        History: HistoryStack,
        Profile: ProfileStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === "Home") {
                    return <FontAwesome name={"home"} size={25} color={tintColor} />;
                } else if (routeName === "History") {
                    return <FontAwesome name={"history"} size={25} color={tintColor} />;
                } else if (routeName === "Profile") {
                    return <FontAwesome name={"user"} size={25} color={tintColor} />;
                }
            }
        }),
        tabBarOptions: {
            activeTintColor: "#fff",
            inactiveTintColor: Color.whiteOrange,
            showLabel: true,
            style: { backgroundColor: Color.primaryColor }
        }
    }
);

export default createAppContainer(MainTab);
