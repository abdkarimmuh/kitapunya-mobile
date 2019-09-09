import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { HomeMenu, EmptyData } from "@app/containers";
import { 
    Text,
    Title,
    DonationItem,
    Loading
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
        fontWeight: "500",
        color: Color.grey
    },
});

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isFetchingUser: true,
            campaign: [],
            isFetchingCampaign: true,
            error: false
        };
    }

    componentDidMount() {
        this.getUserMock();
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

    getUserMock = async () => {
        Mock.create()
        .getUser()
        .then(res => {
            this.setState({ user: res.data, isFetchingUser: false })
        })
        .catch(err => {
            console.log("ERR", err)
            this.setState({ error: true, isFetchingUser: true })
        })
    }

    renderHeader = () => {
        if(this.state.isFetchingUser) {
            return(
                <View style={styles.containerHeader}>
                    <Image style={styles.imageProfile} source={Images.avatar.avatarDefault} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Welcome</Text>
                        <Text style={styles.textHeaderName}>Name</Text>
                    </View>
                </View>
            )
        } else {
            return(
                <View style={styles.containerHeader}>
                    {
                        (this.state.user.avatar == '' || this.state.user.avatar == null)
                        ? <Image style={styles.imageProfile} source={Images.avatar.avatarDefault} />
                        : <Image style={styles.imageProfile} source={{uri: this.state.user.avatar}} />
                    }
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Welcome</Text>
                        <Text style={styles.textHeaderName}>{this.state.user.full_name}</Text>
                    </View>
                </View>
            )
        }
    };

    renderCurrentCampaign = () => {
        if(this.state.isFetchingCampaign) {
            return(<View style={{padding: 16}}><Loading/></View>)
        } else if(this.state.campaign===null) {
            return(<EmptyData/>)
        } else {
            return(
                this.state.campaign.map((item) => (
                    <View style={styles.containerCard}>
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
            <View style={{ flex:1, backgroundColor: Color.backgroudDefault }}>
                {this.renderHeader()}
                <ScrollView style={{ flex:1 }}>
                    <View style={styles.container}>
                        <Title style={styles.titleHome}>Pilih Kategori Campaign</Title>
                        <HomeMenu />
                        <Title style={styles.titleHome}>Lihat Campaign Terbaru</Title>
                        {this.renderCurrentCampaign()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}