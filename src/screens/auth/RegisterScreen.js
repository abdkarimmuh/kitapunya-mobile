import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Image, ImageBackground, View } from "react-native";
import { ButtonLoginRegister, Container, Text, TextInput } from "@app/components";
import Api from "@app/api/Api";
import { NavigationServices, AsyncStorage } from "@app/services";

import UserRedux from "@app/redux/user";

import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import { darkTheme } from "@app/themes";

type Props = {
    setData: any => void,
    setToken: any => void,
}

class RegisterScreen extends PureComponent<Props> {

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

    onPressLogin = async () => {
        console.log("Login");
        NavigationServices.navigate("Login");
    }

    onPressRegister = () => {

    };

    renderInput = () => {
        return (
            <View>
                <TextInput label="Name" mode="outlined" theme={darkTheme} value={this.state.name} style={Styles.textInput}
                    onChangeText={name => { this.setState({ name }) }}
                />
                <TextInput label="Email" mode="outlined" theme={darkTheme} value={this.state.email} style={Styles.textInput}
                    onChangeText={email => { this.setState({ email }) }}
                />
                <TextInput label="Password" mode="outlined" theme={darkTheme} secureTextEntry value={this.state.password} style={Styles.textInput}
                    onChangeText={password => { this.setState({ password }) }}
                />
                <TextInput label="Konfirmasi Password" mode="outlined" theme={darkTheme} secureTextEntry value={this.state.confrimPassword} style={Styles.textInput}
                    onChangeText={confrimPassword => { this.setState({ confrimPassword }) }}
                />
            </View>
        );
    }

    renderBottom = () => {
        return (
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 32 }}>
                <Text theme={darkTheme}>Sudah punya akun?</Text>
                <Text theme={darkTheme} style={{ marginLeft: 4, fontWeight: "bold" }} onPress={this.onPressLogin}>Login</Text>
            </View>
        )
    }

    render() {
        return (
            <ImageBackground source={Images.background.backgroundLogin} style={Styles.bgImage}>
                <Container style={Styles.login}>
                    <Image source={Images.logo.bannerWhite} style={Styles.imgLogin} />
                    {this.renderInput()}
                    {ButtonLoginRegister("REGISTER", this.onPressRegister)}
                    {this.renderBottom()}
                </Container>
            </ImageBackground>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(UserRedux.actions.setData({ data })),
    setToken: token => dispatch(UserRedux.actions.setToken(token))
})

export default connect(null, mapDispatchToProps)(RegisterScreen);