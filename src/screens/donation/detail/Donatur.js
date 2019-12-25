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

    renderDonatur = ({ data }) => (
        data.map((item, index) => (
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }} key={index}>
                {
                    (item.image_url == null || item.image_url == "")
                        ? <Image source={Images.avatar.avatarDefault} style={Styles.avatarDonatur} />
                        : <Image source={{ uri: item.image_url }} style={Styles.avatarDonatur} />
                }
                <View style={{ alignSelf: "center", marginLeft: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.nama}</Text>
                    <View style={{ flexDirection: "row" }}>
                        {
                            item.barang.map((barang, index) => (
                                <View style={{ flexDirection: "row" }}>
                                    {(index != 0) && <Text style={{ fontSize: 12, color: Color.grey }}>, </Text>}
                                    <Text style={{ fontSize: 12, color: Color.grey }}>{barang.qty} {barang.nama}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </View>
        ))
    )

    render() {
        return (
            <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
                <Container>
                    {this.renderDonatur({ data: this.props.data })}
                </Container>
            </ScrollView>
        );
    }
}