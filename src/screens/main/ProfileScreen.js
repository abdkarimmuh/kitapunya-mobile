import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Container } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";
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
    }
});

export default class ProfileScreen extends Component {

    pressEditProfil = () => {
        NavigationServices.navigate("EditProfile");
    }

    pressLogout = () => {

    }

    _renderHeader = () => (
        <View style={styles.containerHeader}>
            <Image style={styles.imageProfile} source={Images.avatar.avatarDefault} />
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Name</Text>
                <Text style={styles.textHeaderName}>Email</Text>
            </View>
        </View>
    );

    _renderMenu = () => (
        <View style={{marginTop: 8}}>
            <TouchableOpacity
                onPress={() => {
                    this.pressEditProfil();
                }}>
                <View style={styles.containerMenu}>
                    <View style={styles.containerMenuOption}>
                        <Image source={Images.icon.userEdit} style={Styles.imgBtn}/>
                        <Text>Edit Profil</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    this.pressLogout();
                }}>
                <View style={styles.containerMenu}>
                    <View style={styles.containerMenuOption}>
                        <Image source={Images.icon.signOut} style={Styles.imgBtn}/>
                        <Text>Logout</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={{backgroundColor: Color.backgroudDefault, flex: 1}}>
                <Container>
                    {this._renderHeader()}
                </Container>
                {this._renderMenu()}
            </View>
            
        );
    }
}