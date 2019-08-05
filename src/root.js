import React, { Component } from "react";
import { Provider } from "react-redux";
import { BarStatus } from "@app/components";
import { SafeAreaView } from "react-native";
import { store } from "./redux/store";

import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "@app/themes";

import AppNavigation from "./navigation";
import NavigationServices from "@app/services/NavigationServices";

export default class AppRoot extends Component {
    render() {
        return (
            // <Provider store={store}>
            <PaperProvider theme={theme}>
                <SafeAreaView style={{ flex: 1 }}>
                    <BarStatus />
                    <AppNavigation
                        ref={navRef => NavigationServices.setTopLevelNavigator(navRef)}
                    />
                </SafeAreaView>
            </PaperProvider>
            // </Provider>
        );
    }
}
