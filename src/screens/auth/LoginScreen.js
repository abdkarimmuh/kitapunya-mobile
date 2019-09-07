import React, { Component } from "react";
import { Image, ImageBackground, View } from "react-native";
import { 
    TextInputLoginRegister, 
    ButtonLoginRegister, 
    Container, 
    Text 
} from "@app/components";

import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import { darkTheme } from "@app/themes";

import NavigationServices from "@app/services/NavigationServices";

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onPressLogin = () => {
        console.log("Login " + this.state.email + " " + this.state.password)
        this.setState({
            email: "",
            password: ""
        })
        NavigationServices.resetStackNavigate(["Main"]);
    };

    onPressRegister = () => {
        console.log("Register")
        NavigationServices.navigate("Register");
    };

    renderInput = () => {
        return (
            <View>
                {TextInputLoginRegister(
                    "Email",
                    this.state.email,
                    (email) => { this.setState({ email }) }
                )}
                {TextInputLoginRegister(
                    "Password",
                    this.state.password,
                    (password) => { this.setState({ password }) }
                )}
            </View>
        )
    }

    renderBottom = () => {
        return (
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 32 }}>
                <Text theme={darkTheme}>Belum punya akun?</Text>
                <Text
                    theme={darkTheme}
                    style={{ marginLeft: 4, fontWeight: "bold" }}
                    onPress={this.onPressRegister}>Register</Text>
            </View>
        )
    }

    render() {
        return (
            <ImageBackground source={Images.background.backgroundLogin} style={Styles.bgImage}>
                <Container style={Styles.login}>
                    <Image source={Images.logo.iconHeader} style={Styles.imgLogin} />
                    {this.renderInput()}
                    {ButtonLoginRegister(
                        "LOGIN",
                        this.onPressLogin
                    )}
                    {this.renderBottom()}
                </Container>
            </ImageBackground>
        );
    }
}