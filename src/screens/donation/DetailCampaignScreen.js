import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import { 
    Container,
    Paragraph,
    Subheading, 
    Button, 
    ProgressBar, 
    Text,
    Title
} from "@app/components";

import { 
    BarangScreen, DonaturScreen
} from "@app/screens";

import { TabView, TabBar } from "react-native-tab-view";
import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";
import NavigationServices from "@app/services/NavigationServices";

const DescriptionRoute = ({data}) => (
    <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
        <Container>
            <Paragraph>{data}</Paragraph>
        </Container>
    </ScrollView>
);

export default class DetailDonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            error: false,
            index: 0,
            routes: [
                { key: "one", title: "Deskripsi" },
                { key: "two", title: "Barang" },
                { key: "three", title: "Donatur" }
            ]
        };
    }

    _renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Color.primaryColor }}
            style={{ backgroundColor: "#FFF" }}
            labelStyle={{ fontWeight: "bold" }}
            activeColor={ Color.primaryColor }
            inactiveColor={ Color.grey }
        />
    );

    _renderScene = ({ route }) => {
        switch (route.key) {
            case 'one':
                return <DescriptionRoute data={'lallala'} />;
            case 'two':
                return <BarangScreen data={'lallala'} />;
            case 'three':
                return <DonaturScreen data={'lallala'} />;
            default:
                return null;
        }
    };
    
    pressDonation(title) {
        NavigationServices.navigate("Donation", { title: title });
    }

    renderProgressBar = () => {
        return (
            <View style={{ paddingTop: 6}}>
                <ProgressBar progress={0.5} color={Color.primaryColor} style={{ marginBottom: -6 }} />
                <View style={Styles.itemDonationDetail}>
                    <View style={{ flexDirection: "row" }}>
                        <Subheading>Dibuat oleh </Subheading>
                        <Subheading style={{ fontWeight: "bold" }}>Jhon Doe</Subheading>
                    </View>
                    <Subheading>Days</Subheading>
                </View>
            </View>
        )
    }

    renderHeader = () => {
        return(
            <>
                <Image source={Images.background.backgroundLogin} style={{ width: Metrics.DEVICE_WIDTH, height: Metrics.HightCarousel }} />
                <View style={Styles.btnDonasi}>
                    <Button 
                        mode="contained" 
                        dark
                        onPress={() => this.pressDonation("Donasi")}>
                        <Image source={Images.icon.gift} style={Styles.imgBtn} />
                        <Text style={{ color: Color.white }}>   DONASI</Text>
                    </Button>
                </View>
                <View style={{ marginTop: 28, marginHorizontal: 24, marginBottom: 16 }}>
                    <Title style={{ fontWeight: "bold" }}>Title Donasi</Title>
                    {this.renderProgressBar()}
                </View>
            </>
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
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