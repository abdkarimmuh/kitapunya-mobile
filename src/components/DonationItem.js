import React, { Component } from "react";
import { Image, View } from "react-native";
import { Container, Card, Subheading, Caption, ProgressBar } from "@app/components";
import NavigationServices from "@app/services/NavigationServices";
import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";

export default class DonationItem extends Component {
    pressCategory(title) {
        NavigationServices.navigate("DetailCampaign", { title: title });
    }

    render() {
        return (
            <Card onPress={() => this.pressCategory("Detail")}>
                <View style={Styles.itemDonation}>
                    <Image source={Images.background.backgroundLogin} style={{ width: Metrics.ItemDonation, height: Metrics.ItemDonation }} />
                    <View style={{ paddingLeft: 16, paddingRight: 16, flex: 1 }}>
                        <Subheading>Card title</Subheading>
                        <Caption>Card content</Caption>
                        <ProgressBar progress={0.5} color={Color.primaryColor} style={{ marginBottom: -16 }} />
                        <View style={Styles.itemDonationDetail}>
                            <Caption>Days</Caption>
                        </View>
                    </View>
                </View>
            </Card>
        );
    }
}