import React, { Component } from "react";
import { Image, View } from "react-native";
import { Card, Text, Caption, ProgressBar } from "@app/components";
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
            <Card 
                style = {{ elevation: 2 }}
                onPress={() => this.pressCategory("Detail")}>
                <View style={Styles.itemDonation}>
                    {
                        (this.props.imageUrl == '' || this.props.imageUrl == null)
                        ? <Image source={Images.background.backgroundLogin} style={{ width: Metrics.ItemDonation, height: Metrics.ItemDonation, resizeMode: "cover" }} />
                        : <Image source={{uri: this.props.imageUrl}} style={{ width: Metrics.ItemDonation, height: Metrics.ItemDonation, resizeMode: "cover" }}/>
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
                            <Caption>{this.props.day} Days</Caption>
                        </View>
                    </View>
                </View>
            </Card>
        );
    }
}