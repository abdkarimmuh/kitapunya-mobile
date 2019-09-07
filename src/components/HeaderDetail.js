import React, { Component } from "react";
import { View } from "react-native";
import { Title } from "@app/components";

export default class HeaderDetail extends Component {
    render() {
        return (
            <View style={{paddingHorizontal: 16}}>
                <Title style={{ color: "#FFF" }} >{this.props.children}</Title>
            </View>
        );
    }
}
