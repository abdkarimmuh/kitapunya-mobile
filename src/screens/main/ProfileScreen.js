import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Container } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Mock } from "@app/api";
import NavigationServices from "@app/services/NavigationServices";

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageProfile: {
        height: 64,
        width: 64,
        borderRadius: 450,
        borderWidth: 2,
        borderColor: Color.black
    },
    textContainer: {
      flexDirection: "column",
      marginLeft: 16
    },
    textHeader: {
      fontWeight: "bold",
      color: Color.black,
      fontSize: 18
    },
    textHeaderName: {
      color: Color.black,
      fontSize: 14
    },
    containerMenu: {
        width: "100%",
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    containerMenuOption: {
        flexDirection: "row",
        alignItems: "center"
    }, 
    imgBtn: {
        marginRight: 16,
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    titleMenu: {
        fontSize: 16,
        fontWeight: "500"
    }
});

export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isFetchingUser: true,
            error: false
        };
    }

    componentDidMount() {
        this.getUserMock();
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

    pressEditProfil = () => {
        NavigationServices.navigate("EditProfile");
    }

    pressLogout = () => {

    }

    renderHeader = () => {
        if(this.state.isFetchingUser) {
            return(
                <View style={styles.containerHeader}>
                    <Image style={styles.imageProfile} source={Images.avatar.avatarDefault} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>Name</Text>
                        <Text style={styles.textHeaderName}>Email</Text>
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
                        <Text style={styles.textHeader}>{this.state.user.full_name}</Text>
                        <Text style={styles.textHeaderName}>{this.state.user.email}</Text>
                    </View>
                </View>
            )
        }
    };

    renderMenu = () => (
        <View style={{marginTop: 16}}>
            <TouchableOpacity
                onPress={() => {
                    this.pressEditProfil();
                }}>
                <View style={styles.containerMenu}>
                    <View style={styles.containerMenuOption}>
                        <Image source={Images.icon.userEdit} style={styles.imgBtn}/>
                        <Text style={styles.titleMenu}>Edit Profil</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    this.pressLogout();
                }}>
                <View style={styles.containerMenu}>
                    <View style={styles.containerMenuOption}>
                        <Image source={Images.icon.signOut} style={styles.imgBtn}/>
                        <Text style={styles.titleMenu}>Logout</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={{backgroundColor: Color.backgroudDefault, flex: 1}}>
                <Container>
                    {this.renderHeader()}
                </Container>
                {this.renderMenu()}
            </View>
            
        );
    }
}