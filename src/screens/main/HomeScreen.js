import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Image, ScrollView, SafeAreaView, RefreshControl, ToastAndroid } from "react-native";
import { DonationItemScreen } from "@app/screens";
import { HomeMenu, EmptyData } from "@app/containers";
import { Text, Title, Loading } from "@app/components";
import { Api } from "@app/api";
import { NavigationServices } from "@app/services";

import Images from "@app/assets/images";
import Styles from "@app/assets/styles";

import UserRedux from "@app/redux/user";

type Props = {
    token: string,
    name: string,
    email: string,
    path_photo: string,
    setUser: any => void,
    resetUser: any => void,
}

class HomeScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            refreshingUser: false,
            refreshingCampaign: false,
            user: {},
            campaign: [],
            error: false,
        };
    }

    componentDidMount() {
        this.getUser();
        this.getCampaignCurrent();
    }

    onRefresh = () => {
        this.setState({ refreshingUser: true, refreshingCampaign: true });
        this.getUser();
        this.getCampaignCurrent();
    }

    getUser = async () => {
        this.props.resetUser();
        Api.get()
            .user(this.props.token)
            .then(res => {
                console.log("res getUser", res);
                if (res.status === 200) {
                    this.props.setUser(res.data.data);
                    this.setState({ refreshingUser: false });
                } else if (res.status != 200) {
                    this.setState({ refreshingUser: false });
                    NavigationServices.resetStackNavigate(["Auth"])
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                NavigationServices.resetStackNavigate(["Auth"]);
                this.setState({ error: true, refreshingUser: false });
            });
    }

    getCampaignCurrent = async () => {
        let campaign = []
        Api.get()
            .campaignCurrent(this.props.token)
            .then(res => {
                campaign = res.data.data
                console.log("res getCampaignCurrent", res);
                if (res.status === 200) {
                    this.setState({ refreshingCampaign: false, campaign: campaign });
                } else if (res.status != 200) {
                    this.setState({ refreshingCampaign: false, });
                    ToastAndroid.show("Data tidak ditemukan", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                ToastAndroid.show("Error", ToastAndroid.SHORT);
                this.setState({ error: true, refreshingCampaign: false });
            });
    }

    renderHeader = () => {
        if (this.state.refreshingUser) {
            return (
                <View style={Styles.containerHeaderMain}>
                    <Image style={Styles.imageProfileMain} source={Images.avatar.avatarPrimary} />
                    <View style={Styles.containerTextHeaderMain}>
                        <Text style={Styles.textHeaderMain}>Welcome</Text>
                        <Text style={Styles.textHeaderNameMain}>Name</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={Styles.containerHeaderMain}>
                    {
                        (this.props.path_photo == '' || this.props.path_photo == null)
                            ? <Image style={Styles.imageProfileMain} source={Images.avatar.avatarPrimary} />
                            : <Image style={Styles.imageProfileMain} source={{ uri: this.props.path_photo }} />
                    }
                    <View style={Styles.containerTextHeaderMain}>
                        <Text style={Styles.textHeaderMain}>Welcome</Text>
                        <Text style={Styles.textHeaderNameMain}>{this.props.name}</Text>
                    </View>
                </View>
            )
        }
    };

    renderCurrentCampaign = () => {
        if (this.state.refreshingCampaign) {
            return (<View style={{ padding: 16 }}><Loading /></View>)
        } else if (this.state.campaign == null || this.state.campaign == '') {
            return (<View style={{ marginTop: 16 }}><EmptyData /></View>)
        } else {
            return (
                this.state.campaign.map((item, index) => (
                    <View style={{ marginTop: 24 }} key={index}>
                        <DonationItemScreen
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            imageUrl={item.image_url}
                            day={item.day}
                            percent={item.percent} />
                    </View>
                ))
            )
        }
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={Styles.containerDefault}>
                {this.renderHeader()}
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView style={Styles.containerDefault} refreshControl={
                        <RefreshControl refreshing={this.state.refreshingUser && this.state.refreshingCampaign} onRefresh={this.onRefresh.bind(this)} />
                    }>
                        <View style={{ padding: 24 }}>
                            <Title style={Styles.titleMain}>Pilih Kategori Campaign</Title>
                            <HomeMenu />
                            <Title style={Styles.titleMain}>Lihat Campaign Terbaru</Title>
                            {this.renderCurrentCampaign()}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    name: UserRedux.selectors.name(state),
    email: UserRedux.selectors.email(state),
    path_photo: UserRedux.selectors.path_photo(state),
})

const mapDispatchToProps = dispatch => ({
    setUser: data => dispatch(UserRedux.actions.setData({ data })),
    resetUser: () => dispatch(UserRedux.actions.resetUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)