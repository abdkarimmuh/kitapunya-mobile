import React, { Component } from "react";
import { Image } from "react-native";
import Logo from "@app/assets/images";

export default class HeaderDefault extends Component {
    render() {
        return (
            <Image
                source={Logo.logo.iconHeader}
                style={{ width: 150, height: 25, resizeMode: "contain" }}
                containerStyle={{ marginLeft: 5 }}
            />
        );
    }
}
