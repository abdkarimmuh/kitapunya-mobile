import React, { Component } from "react";
import { Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import NavigationServices from "@app/services/NavigationServices";

import Logo from "@app/assets/images";
import Color from "@app/assets/colors";

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            NavigationServices.resetStackNavigate(["Auth"]);
        }, 3000);
    }

    render() {
        return (
            <LinearGradient
                start={{ x: 1.0, y: 0.0 }}
                end={{ x: 0.0, y: 1.0 }}
                colors={[Color.primaryColor, Color.pirmaryLightColor]}
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            >
                <Image
                    source={Logo.logo.iconSplash}
                    style={{ width: 120, height: 160, resizeMode: "contain" }}
                />
            </LinearGradient>
        );
    }
}