import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { HomeMenu } from "@app/containers";
import { 
    Text,
    Title,
    DonationItem
} from "@app/components";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Mock } from "@app/api";

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    containerCard: {
        marginTop: 24
    },
    containerHeader: {
        width: "100%",
        padding: 24,
        backgroundColor: Color.primaryColor,
        flexDirection: "row",
        alignItems: "center",
        elevation: 4,
    },
    imageProfile: {
        height: 80,
        width: 80,
        borderRadius: 450,
        borderWidth: 2,
        borderColor: "#FFF"
    },
    textContainer: {
      flexDirection: "column",
      marginLeft: 16
    },
    textHeader: {
      fontWeight: "bold",
      color: "#FFF",
      fontSize: 24
    },
    textHeaderName: {
      color: "#FFF",
      fontSize: 16
    },
    titleHome: {
        fontSize: 18,
        fontWeight: "bold",
        color: Color.grey
    },
});

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false
        };
    }

    componentDidMount() {
        this.getCampaignCurrentMock();
    }

    getCampaignCurrentMock = async () => {
        Mock.create()
        .getCarousel()
        .then(res => {
            this.setState({ data: res.data })
        })
        .catch(err => {
            console.log("ERR", err)
            this.setState({
                error: true
            })
        })
    }

    _renderHeader = () => (
        <View style={styles.containerHeader}>
            <Image style={styles.imageProfile} source={Images.avatar.avatarDefault} />
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Welcome</Text>
                <Text style={styles.textHeaderName}>Name</Text>
            </View>
        </View>
    );

    render() {
        console.disableYellowBox = true;
        return (
            <View style={{ flex:1, backgroundColor: Color.backgroudDefault }}>
                {this._renderHeader()}
                <ScrollView style={{ flex:1 }}>
                    <View style={styles.container}>
                        <Title style={styles.titleHome}>Pilih Kategori Campaign</Title>
                        <HomeMenu />
                        <Title style={styles.titleHome}>Lihat Campaign Terbaru</Title>
                        <View style={styles.containerCard}>
                            <DonationItem />
                        </View>
                        <View style={styles.containerCard}>
                            <DonationItem />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}