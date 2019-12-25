import React, { Component } from "react";
import { BarStatus } from "@app/components";
import { SafeAreaView } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Icon } from 'react-native-eva-icons';
import { theme } from "@app/themes";

import store from "./redux/store";
import AppNavigation from "./navigation";
import { NavigationServices } from "@app/services";

export default class AppRoot extends Component {
    render() {
        return (
            <Provider store={store}>
                <PaperProvider theme={theme} settings={{ icon: props => <AwesomeIcon {...props} /> }} >
                    <SafeAreaView style={{ flex: 1 }}>
                        <BarStatus />
                        <AppNavigation
                            ref={navigatorRef => NavigationServices.setTopLevelNavigator(navigatorRef)}
                        />
                    </SafeAreaView>
                </PaperProvider>
            </Provider>
        )
    }
}
