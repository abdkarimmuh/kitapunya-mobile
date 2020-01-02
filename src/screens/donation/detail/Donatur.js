import React, { Component } from "react";
import { ScrollView, Image, View } from "react-native";
import { Container, Text } from "@app/components";
import Images from "@app/assets/images";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";

export default class DonaturScreen extends Component {

    renderDonatur = ({ data }) => (
        data.map((item, index) => (
            <View style={[Styles.containerRowCenter, { marginBottom: 24 }]} key={index}>
                {
                    (item.image_url == null || item.image_url == "")
                        ? <Image source={Images.avatar.avatarWhite} style={Styles.avatarDonatur} />
                        : <Image source={{ uri: item.image_url }} style={Styles.avatarDonatur} />
                }
                <View style={Styles.containerDonatur}>
                    <Text style={Styles.textNameDonatur}>{item.nama}</Text>
                    <View style={{ flexDirection: "row" }}>
                        {
                            item.barang.map((barang, index) => (
                                <View style={{ flexDirection: "row" }}>
                                    {(index != 0) && <Text style={Styles.textItemDonatur}>, </Text>}
                                    <Text style={Styles.textItemDonatur}>{barang.qty} {barang.nama}</Text>
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
            <ScrollView style={Styles.containerDefault}>
                <Container>
                    {this.renderDonatur({ data: this.props.data })}
                </Container>
            </ScrollView>
        );
    }
}