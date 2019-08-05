import React, { Component } from "react";
import { View, Image, ScrollView } from 'react-native';
import { Container, Avatar, Subheading, Button, ProgressBar, Caption, Title, Paragraph } from '@app/components';
import Images from '@app/assets/images';
import Style from '@app/assets/styles';
import Color from '@app/assets/colors';
import { LOREMIPSUM } from '@app/assets/strings';
import { Metrics } from '@app/themes';
import NavigationServices from '@app/services/NavigationServices';

export default class DetailDonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            error: false
        };
    }

    pressDonatur(title) {
        NavigationServices.navigate('ListDonatur', { title: title });
    }

    renderHeader = () => {
        return (
            <View style={[Style.itemDonation, { justifyContent: 'space-between' }]}>
                <View style={Style.itemDonation}>
                    <Avatar.Image size={32} source={Images.avatar.avatarDefault} />
                    <Subheading style={{ paddingLeft: 12 }}>Saha Aing</Subheading>
                </View>
                <Button icon="favorite" mode="contained" dark>Donasi</Button>
            </View>
        )
    }

    renderProgressBar = () => {
        return (
            <View style={{ paddingTop: 8, paddingBottom: 14 }}>
                <ProgressBar progress={0.5} color={Color.primaryColor} style={{ marginBottom: -16 }} />
                <View style={Style.itemDonationDetail}>
                    <Subheading>Days</Subheading>
                </View>
            </View>
        )
    }

    renderDescription = () => {
        return (
            <View style={Style.itemDescriptionDetail}>
                <Subheading style={Style.headerDescription}>Deskripsi</Subheading>
                <View style={{ paddingLeft: 8 }}>
                    <Paragraph>{LOREMIPSUM}</Paragraph>
                </View>
            </View>
        )
    }

    renderItems = () => {
        return (
            <View style={Style.itemDescriptionDetail}>
                <Subheading style={Style.headerDescription}>Barang yang dibutuhkan</Subheading>
                <View style={{ paddingLeft: 8 }}>
                    <Caption>1</Caption>
                    <Caption>2</Caption>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <Image source={Images.background.backgroundLogin} style={{ width: Metrics.DEVICE_WIDTH, height: Metrics.HightCarousel }} />
                <Container style={{ padding: 24 }}>
                    {this.renderHeader()}
                    {this.renderProgressBar()}
                    <Title style={{ fontWeight: 'bold' }}>This Title</Title>
                    {this.renderDescription()}
                    {this.renderItems()}
                    <Button
                        mode="contained"
                        onPress={() => this.pressDonatur("Donatur")}
                        dark
                        style={{ width: '100%', marginTop: 12 }}>DONATUR</Button>
                </Container>
            </ScrollView>
        );
    }
}