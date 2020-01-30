import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import Images from "@app/assets/images";
import Color from "@app/assets/colors";

export default class EmptyContent extends Component {
    render() {
        return (
            <View style={{ widht: "100%", alignItems: "center", marginTop: 14 }}>
                <Image source={Images.logo.banner} style={{ width: 200, height: 80, resizeMode: "contain" }} />
                <Text style={{ textAlign: "center", color: Color.textColor, fontStyle: "italic" }}>{this.props.content}</Text>
            </View>
        );
    }
}