import React, { PureComponent } from "react";
import { View, StatusBar, Platform } from "react-native";
import Color from "@app/assets/colors";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export default class BarStatus extends PureComponent {
    render() {
        return (
            <View style={{ height: STATUSBAR_HEIGHT }}>
                <StatusBar translucent backgroundColor={Color.primaryColor} />
            </View>
        );
    }
}
