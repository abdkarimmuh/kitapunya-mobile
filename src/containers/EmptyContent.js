import React, { Component } from "react";
import { View, Image } from "react-native";
import { Title } from "react-native-paper";
import Images from "@app/assets/images";

export default class EmptyContent extends Component {
    render() {
        return (
            <View style={{ widht: "100%", alignItems: "center" }}>
                <Image source={Images.logo.banner} style={{ width: 200, height: 80, resizeMode: "contain" }} />
                <Title style={{ textAlign: "center" }}>{this.props.content}</Title>
            </View>
        );
    }
}