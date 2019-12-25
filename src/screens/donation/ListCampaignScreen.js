import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { DonationItem, Container, Loading } from "@app/components";
import { EmptyData } from "@app/containers";
import { Mock } from "@app/api";

const styles = StyleSheet.create({
    containerCard: { marginBottom: 24 },
});

export default class ListDonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaign: [],
            isFetchingCampaign: true,
            error: false
        };
    }

    componentDidMount() {
        this.getCampaignCurrentMock();
    }

    getCampaignCurrentMock = async () => {
        Mock.create()
            .getCampaign()
            .then(res => {
                this.setState({ campaign: res.data, isFetchingCampaign: false })
            })
            .catch(err => {
                console.log("ERR", err)
                this.setState({ error: true, isFetchingCampaign: true })
            })
    }

    renderCurrentCampaign = () => {
        if (this.state.isFetchingCampaign) {
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
        return (
            <ScrollView>
                <Container>
                    {this.renderCurrentCampaign()}
                </Container>
            </ScrollView>
        );
    }
}