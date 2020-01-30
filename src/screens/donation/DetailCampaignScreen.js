import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Image, ScrollView, TouchableOpacity, ToastAndroid } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Container, Paragraph, Subheading, ProgressBar, Text, Title, Loading } from "@app/components";
import { EmptyContent } from "@app/containers";
import { BarangScreen, DonaturScreen } from "@app/screens";
import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";
import { Api } from "@app/api";
import { NavigationServices } from "@app/services";

import UserRedux from "@app/redux/user";

const DescriptionRoute = ({ data }) => (
    <ScrollView style={Styles.containerDefault}>
        <Container>
            <Paragraph>{data}</Paragraph>
        </Container>
    </ScrollView>
);

const RilisRoute = ({ data }) => {
    if (data.title != null || data.description != null) {
        return (
            <ScrollView style={Styles.containerDefault}>
                <Container>
                    <Title>{data.title}</Title>
                    <Paragraph>{data.description}</Paragraph>
                </Container>
            </ScrollView>
        );
    } else {
        return (
            <ScrollView style={Styles.containerDefault}>
                <Container>
                    <EmptyContent content={"Rilis Kosong"} />
                </Container>
            </ScrollView>
        );
    }
};

type Props = {
    token: string,
}

class DetailCampaignScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            data: {},
            refreshingDetail: true,
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
        this.setState({ id: JSON.parse(this.props.navigation.getParam("id")) })
        this.getDetailCampaign();
    }

    getDetailCampaign = async () => {
        let data = []
        Api.get()
            .campaignDetail(this.props.token, JSON.parse(this.props.navigation.getParam("id")))
            .then(res => {
                data = res.data.data
                console.log("res getCategoryCampaign", res);
                if (res.status === 200) {
                    this.setState({ refreshingDetail: false, data: data });
                } else if (res.status != 200) {
                    this.setState({ refreshingDetail: false });
                    ToastAndroid.show("Data tidak ditemukan", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                ToastAndroid.show("Error", ToastAndroid.SHORT);
                this.setState({ error: true, refreshingDetail: false });
            });
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

    pressDonation(title, id, judul, barang) {
        NavigationServices.navigate("Donation", { title: title, id: id, judul: judul, barang: barang });
    }

    renderProgressBar = () => {
        return (
            <View style={{ paddingTop: 6 }}>
                <ProgressBar progress={this.state.data.percent} color={Color.primaryColor} style={{ marginBottom: -6 }} />
                <View style={Styles.containerRow}>
                    <View style={{ flexDirection: "row" }}>
                        <Subheading>Dibuat oleh </Subheading>
                        <Subheading style={{ fontWeight: "bold" }}>{this.state.data.campaigner}</Subheading>
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
                    <TouchableOpacity onPress={() => this.pressDonation("Donasi", this.state.id, this.state.data.title, this.state.data.barang)}>
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
        if (this.state.refreshingDetail) {
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

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(DetailCampaignScreen)