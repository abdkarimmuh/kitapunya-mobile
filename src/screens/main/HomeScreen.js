import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Image, StyleSheet, ScrollView, SafeAreaView, RefreshControl } from "react-native";
import { HomeMenu, EmptyData } from "@app/containers";
import { Text, Title, DonationItem, Loading } from "@app/components";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Api, Mock } from "@app/api";

import UserRedux from "@app/redux/user";
import { NavigationServices } from "@app/services";

const styles = StyleSheet.create({
    container: { padding: 24 },
    containerScroll: { flex: 1, backgroundColor: Color.backgroudDefault },
    containerCard: { marginTop: 24 },
    containerHeader: { width: "100%", padding: 24, backgroundColor: Color.white, flexDirection: "row", alignItems: "center", elevation: 4, },
    imageProfile: { height: 80, width: 80, borderRadius: 40, borderWidth: 2, borderColor: Color.primaryColor },
    textContainer: { flexDirection: "column", marginLeft: 16 },
    textHeader: { fontWeight: "bold", color: Color.textColor, fontSize: 24 },
    textHeaderName: { color: Color.textColor, fontSize: 16 },
    titleHome: { fontSize: 18, fontWeight: "bold", color: Color.grey },
});

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
        this.getCampaignCurrentMock();
    }

    onRefresh = () => {
        this.setState({ refreshingUser: true, refreshingCampaign: true });
        this.getUser();
        this.getCampaignCurrentMock();
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
                    NavigationServices.resetStackNavigate(["Auth"])
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                NavigationServices.resetStackNavigate(["Auth"]);
                this.setState({ error: true, refreshingUser: false });
            });
    }

    getCampaignCurrentMock = async () => {
        Mock.create()
            .getCampaign()
            .then(res => {
                this.setState({ campaign: res.data, refreshingCampaign: false });
            })
            .catch(err => {
                console.log("ERR", err);
                this.setState({ error: true, refreshingCampaign: true });
            })
    }

    renderHeader = () => {
        if (this.state.refreshingUser) {
            return (
                <View style={styles.containerHeader}>
                    <Image style={styles.imageProfile} source={Images.avatar.avatarPrimary} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Welcome</Text>
                        <Text style={styles.textHeaderName}>Name</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.containerHeader}>
                    {
                        (this.props.path_photo == '' || this.props.path_photo == null)
                            ? <Image style={styles.imageProfile} source={Images.avatar.avatarPrimary} />
                            : <Image style={styles.imageProfile} source={{ uri: this.props.path_photo }} />
                    }
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Welcome</Text>
                        <Text style={styles.textHeaderName}>{this.props.name}</Text>
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
                    <View style={styles.containerCard} key={index}>
                        <DonationItem
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
            <View style={{ flex: 1, backgroundColor: Color.backgroudDefault }}>
                {this.renderHeader()}
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView style={styles.containerScroll} refreshControl={
                        <RefreshControl refreshing={this.state.refreshingUser && this.state.refreshingCampaign} onRefresh={this.onRefresh.bind(this)} />
                    }>
                        <View style={styles.container}>
                            <Title style={styles.titleHome}>Pilih Kategori Campaign</Title>
                            <HomeMenu />
                            <Title style={styles.titleHome}>Lihat Campaign Terbaru</Title>
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