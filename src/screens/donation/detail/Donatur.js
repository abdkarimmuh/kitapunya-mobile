import React, { Component } from "react";
import { ScrollView, Image, View } from "react-native";
import {
    Container, 
    Text
} from "@app/components";
import Images from "@app/assets/images";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";

export default class DonaturScreen extends Component {

    renderDonatur = () => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
                <Image source={Images.avatar.avatarDefault} style={Styles.avatarDonatur} />
                <View style={{ alignSelf: "center", marginLeft: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nama Donatur</Text>
                    <Text style={{ fontSize: 12, color: Color.grey }}>Barang yang di donasikan</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
                <Container>
                    {this.renderDonatur()}
                    {this.renderDonatur()}
                </Container>
            </ScrollView>
        );
    }
}