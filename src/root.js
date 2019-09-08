import React, { Component } from "react";
import { BarStatus } from "@app/components";
import { SafeAreaView } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "@app/themes";

import AppNavigation from "./navigation";
import NavigationServices from "@app/services/NavigationServices";

export default class AppRoot extends Component {
    render() {
        return (
            <PaperProvider theme={theme}>
                <SafeAreaView style={{ flex: 1 }}>
                    <BarStatus />
                    <AppNavigation
                        ref={navRef => NavigationServices.setTopLevelNavigator(navRef)}
                    />
                </SafeAreaView>
            </PaperProvider>
        );
    }
}
