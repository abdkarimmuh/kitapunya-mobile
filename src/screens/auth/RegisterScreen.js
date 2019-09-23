import React, { Component } from "react";
import { Image, ImageBackground, View, ScrollView } from "react-native";
import { TextInputLoginRegister, 
    ButtonLoginRegister, 
    Container, 
    Text 
} from "@app/components";

import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import { darkTheme } from "@app/themes";

import NavigationServices from "@app/services/NavigationServices";

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confrimPassword: ""
        }
    }

    onPressLogin = () => {
        console.log("Login")
        NavigationServices.navigate("Login");
    };

    onPressRegister = () => {
        console.log("Register " + this.state.email + " " + this.state.password + this.state.firstName)
        this.setState({
            full_name: "",
            email: "",
            password: "",
            confrimPassword: ""
        })
        NavigationServices.resetStackNavigate(["Main"]);
    };

    renderInput = () => {
        return (
            <View>
                {TextInputLoginRegister(
                    "Full Name",
                    this.state.full_name,
                    (full_name) => { this.setState({ full_name }) },
                    false,
                    "default"
                )}
                {TextInputLoginRegister(
                    "Email",
                    this.state.email,
                    (email) => { this.setState({ email }) },
                    false,
                    "email-address"
                )}
                {TextInputLoginRegister(
                    "Password",
                    this.state.password,
                    (password) => { this.setState({ password }) },
                    true,
                    "default"
                )}
                {TextInputLoginRegister(
                    "Konfirmasi Password",
                    this.state.confrimPassword,
                    (confrimPassword) => { this.setState({ confrimPassword }) },
                    true,
                    "default"
                )}
            </View>
        )
    }

    renderBottom = () => {
        return (
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 32 }}>
                <Text theme={darkTheme}>Sudah punya akun?</Text>
                <Text
                    theme={darkTheme}
                    style={{ marginLeft: 4, fontWeight: "bold" }}
                    onPress={this.onPressLogin}>Login</Text>
            </View>
        )
    }

    render() {
        return (
            <ImageBackground source={Images.background.backgroundLogin} style={Styles.bgImage}>
                <ScrollView style={Styles.containerRegister}>
                    <Container style={Styles.login}>
                        <Image source={Images.logo.iconHeader} style={Styles.imgLogin} />
                        {this.renderInput()}
                        {ButtonLoginRegister(
                            "Register",
                            this.onPressRegister
                        )}
                        {this.renderBottom()}
                    </Container>
                </ScrollView>
            </ImageBackground>
        );
    }
}