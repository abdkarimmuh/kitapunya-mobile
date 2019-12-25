import React, { Component } from "react";
import { View } from "react-native";
import { Title } from "@app/components";
import Color from "@app/assets/colors";

export default class HeaderDetail extends Component {
    render() {
        return (
            <View style={{ paddingHorizontal: 16 }}>
                <Title style={{ color: Color.textColor, fontWeight: "bold" }} >{this.props.children}</Title>
            </View>
        );
    }
}
