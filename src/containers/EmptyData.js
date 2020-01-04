import React, { Component } from "react";
import { Image } from "react-native";
import { Card, Title } from "react-native-paper";
import Images from "@app/assets/images";

export default class EmptyData extends Component {
    render() {
        return (
            <Card style={{ widht: "100%", padding: 24, elevation: 4, alignItems: "center" }}>
                <Card.Content>
                    <Image source={Images.logo.banner} style={{ width: 200, height: 80, resizeMode: "contain" }} />
                    <Title>Data Kosong</Title>
                </Card.Content>
            </Card>
        );
    }
}