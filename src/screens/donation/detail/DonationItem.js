import React, { PureComponent } from "react";
import { Image, View } from "react-native";
import { Card, Text, Caption, ProgressBar } from "@app/components";
import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import Color from "@app/assets/colors";
import { NavigationServices } from "@app/services";
import { Metrics } from "@app/themes";

export default class DonationItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    pressCategory(title, id) {
        NavigationServices.navigate("DetailCampaign", { title: title, id: id });
    }

    render() {
        return (
            <Card
                style={{ elevation: 2 }}
                onPress={() => this.pressCategory("Detail", this.props.id)}>
                <View style={Styles.containerRowCenter}>
                    {
                        (this.props.imageUrl == '' || this.props.imageUrl == null)
                            ? <Image source={Images.background.defaultBanner} style={{ width: Metrics.ItemDonation, height: Metrics.ItemDonation, resizeMode: "cover" }} />
                            : <Image source={{ uri: this.props.imageUrl }} style={{ width: Metrics.ItemDonation, height: Metrics.ItemDonation, resizeMode: "cover" }} />
                    }

                    <View
                        style={{ paddingLeft: 16, paddingRight: 16, flex: 1 }}>
                        <Text
                            numberOfLines={1}
                            style={{ fontSize: 18, fontWeight: "bold" }}>
                            {this.props.title}
                        </Text>
                        <Caption numberOfLines={1}>{this.props.description}</Caption>
                        <ProgressBar progress={this.props.percent} color={Color.primaryColor} style={{ marginBottom: -12 }} />
                        <View style={Styles.itemDaysProgresiveDay}>
                            <Caption>{this.props.day} Hari lagi</Caption>
                        </View>
                    </View>
                </View>
            </Card>
        );
    }
}