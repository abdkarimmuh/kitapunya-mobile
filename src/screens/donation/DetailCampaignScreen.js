import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Container, Paragraph, Subheading, ProgressBar, Text, Title, Loading } from "@app/components";
import { EmptyRilis } from "@app/containers";

import { BarangScreen, DonaturScreen } from "@app/screens";

import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";
import { Mock } from "@app/api";
import NavigationServices from "@app/services/NavigationServices";

const DescriptionRoute = ({ data }) => (
    <ScrollView style={Styles.containerDefault}>
        <Container>
            <Paragraph>{data}</Paragraph>
        </Container>
    </ScrollView>
);

const RilisRoute = ({ data }) => {
    if (data == null) {
        return (
            <ScrollView style={Styles.containerDefault}>
                <Container>
                    <EmptyRilis />
                </Container>
            </ScrollView>
        );
    } else {
        return (
            <ScrollView style={Styles.containerDefault}>
                <Container>
                    <Paragraph>{data}</Paragraph>
                </Container>
            </ScrollView>
        );
    }
};

export default class DetailDonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isFetching: true,
            error: false,
            index: 0,
            routes: [
                { key: "one", title: "Deskripsi" },
                { key: "two", title: "Barang" },
                { key: "three", title: "Donatur" },
                { key: "four", title: "Rilis" },
            ]
        };
    }

    componentDidMount() {
        this.getDetailCampaignMock();
    }

    getDetailCampaignMock = async () => {
        Mock.create()
            .getCampaignDetail()
            .then(res => {
                this.setState({ data: res.data, isFetching: false })
            })
            .catch(err => {
                console.log("ERR", err)
                this.setState({ error: true, isFetching: true })
            })
    }

    _renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Color.primaryColor }}
            style={{ backgroundColor: "#FFF" }}
            labelStyle={{ fontWeight: "bold" }}
            activeColor={Color.primaryColor}
            inactiveColor={Color.grey}
        />
    );

    _renderScene = ({ route }) => {
        switch (route.key) {
            case 'one':
                return <DescriptionRoute data={this.state.data.description} />;
            case 'two':
                return <BarangScreen data={this.state.data.barang} />;
            case 'three':
                return <DonaturScreen data={this.state.data.donatur} />;
            case 'four':
                return <RilisRoute data={this.state.data.rilis} />;
            default:
                return null;
        }
    };

    pressDonation(title) {
        NavigationServices.navigate("Donation", { title: title });
    }

    renderProgressBar = () => {
        return (
            <View style={{ paddingTop: 6 }}>
                <ProgressBar progress={this.state.data.percent} color={Color.primaryColor} style={{ marginBottom: -6 }} />
                <View style={Styles.containerRow}>
                    <View style={{ flexDirection: "row" }}>
                        <Subheading>Dibuat oleh </Subheading>
                        <Subheading style={{ fontWeight: "bold" }}>{this.state.data.lembaga}</Subheading>
                    </View>
                    <Subheading>{this.state.data.day} Hari lagi</Subheading>
                </View>
            </View>
        )
    }

    renderHeader = () => {
        return (
            <>
                {
                    (this.state.data.image_url == null || this.state.data.image_url == "")
                        ? <Image source={Images.background.defaultBanner} style={Styles.bannerDetailCampaign} />
                        : <Image source={{ uri: this.state.data.image_url }} style={Styles.bannerDetailCampaign} />
                }
                <View style={Styles.containerButtonDonasi}>
                    <TouchableOpacity onPress={() => this.pressDonation("Donasi")}>
                        <View style={Styles.buttonDonasi}>
                            <Image source={Images.icon.giftWhite} style={Styles.imageButtonDonasi} />
                            <Text style={{ color: Color.white, fontSize: 16 }}>DONASI</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.containerTitleDetailCampaign}>
                    <Title style={{ fontWeight: "bold" }}>{this.state.data.title}</Title>
                    {this.renderProgressBar()}
                </View>
            </>
        );
    }

    render() {
        if (this.state.isFetching) {
            return (<View style={{ padding: 16 }}><Loading /></View>)
        } else {
            return (
                <View style={{ flex: 1 }}>
                    {this.renderHeader()}
                    <TabView
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Metrics.DEVICE_WIDTH }}
                    />
                </View>
            );
        }
    }
}