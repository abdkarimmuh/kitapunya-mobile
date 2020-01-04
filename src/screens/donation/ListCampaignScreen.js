import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, ScrollView, SafeAreaView, RefreshControl, ToastAndroid } from "react-native";
import { DonationItemScreen } from "@app/screens";
import { Container, Loading } from "@app/components";
import { EmptyData } from "@app/containers";
import { Api } from "@app/api";
import Styles from "@app/assets/styles";

import UserRedux from "@app/redux/user";

type Props = {
    token: string,
}

class ListCampaignScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            campaign: [],
            refreshingCampaign: true,
            error: false
        };
    }

    componentDidMount() {
        this.getCampaignCategory();
    }

    onRefresh = () => {
        this.setState({ refreshingCampaign: true });
        this.getCampaignCategory();
    }

    getCampaignCategory = async () => {
        let campaign = []
        Api.get()
            .campaignCategory(this.props.token, JSON.parse(this.props.navigation.getParam("id")))
            .then(res => {
                campaign = res.data.data
                console.log("res getCategoryCampaign", res);
                if (res.status === 200) {
                    this.setState({ refreshingCampaign: false, campaign: campaign });
                } else if (res.status != 200) {
                    this.setState({ refreshingCampaign: false });
                    ToastAndroid.show("Data tidak ditemukan", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                ToastAndroid.show("Error", ToastAndroid.SHORT);
                this.setState({ error: true, refreshingCampaign: false });
            });
    }

    renderCurrentCampaign = () => {
        if (this.state.refreshingCampaign) {
            return (<View style={{ padding: 16 }}><Loading /></View>)
        } else if (this.state.campaign == null || this.state.campaign == '') {
            return (<View><EmptyData /></View>)
        } else {
            return (
                this.state.campaign.map((item, index) => (
                    <View style={{ paddingVertical: 12 }} key={index}>
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
        return (
            <View style={Styles.containerDefault}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView style={Styles.containerDefault} refreshControl={
                        <RefreshControl refreshing={this.state.refreshingCampaign} onRefresh={this.onRefresh.bind(this)} />
                    }>
                        <Container style={{ paddingVertical: 12 }}>
                            {this.renderCurrentCampaign()}
                        </Container>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(ListCampaignScreen)