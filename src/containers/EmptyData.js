import React, { Component } from "react";
import { Image, Text } from "react-native";
import { Card } from "react-native-paper";
import Images from "@app/assets/images";
import Color from "@app/assets/colors";

export default class EmptyData extends Component {
    render() {
        return (
            <Card style={{ widht: "100%", padding: 24, elevation: 4, alignItems: "center" }}>
                <Card.Content>
                    <Image source={Images.logo.banner} style={{ width: 200, height: 80, resizeMode: "contain" }} />
                    <Text style={{ textAlign: "center", color: Color.textColor, fontStyle: "italic", fontSize: 16 }}>Data Kosong</Text>
                </Card.Content>
            </Card>
        );
    }
}