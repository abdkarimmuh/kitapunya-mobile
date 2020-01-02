import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Image, ImageBackground, View, ToastAndroid } from "react-native";
import { ButtonLoginRegister, Container, Text, TextInput } from "@app/components";
import { NavigationServices, AsyncStorage } from "@app/services";
import Api from "@app/api/Api";
import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import { darkTheme } from "@app/themes";

import UserRedux from "@app/redux/user";

type Props = {
    setData: any => void,
    setToken: any => void,
}

class LoginScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            email: "donatur@example.com",
            password: "1234",
            error: false
        }
    }

    getUser = async (token) => {
        Api.get()
            .user(token)
            .then(res => {
                this.props.setData(res.data.data);
                this.setState({ isFetching: false });
                NavigationServices.resetStackNavigate(["Main"]);
            })
            .catch(error => {
                console.log("ERROR", error);
            });
    }

    onPressLogin = async () => {
        this.setState({ isFetching: true });
        const { email, password } = this.state;

        if (email == "" || password == "") {
            this.setState({ isFetching: false });
            ToastAndroid.show("Input tidak lengkap", ToastAndroid.SHORT);
        } else {
            Api.post()
                .login(email, password)
                .then(res => {
                    console.log("Res login : ", res);
                    if (res.status === 200) {
                        AsyncStorage.StoreData("token", res.data.token);
                        this.getUser(res.data.token);
                        this.props.setToken(res.data.token);
                    } else if (res.status == 401) {
                        this.setState({ isFetching: false });
                        ToastAndroid.show(res.data.error, ToastAndroid.SHORT);
                    } else {
                        this.setState({ isFetching: false });
                        ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                    }
                })
                .catch(error => {
                    console.log("ERROR", error);
                    this.setState({ error: true });
                });
        }
    }

    onPressRegister = () => {
        console.log("Register");
        NavigationServices.navigate("Register");
    }

    renderInput = () => {
        return (
            <View>
                <TextInput label="Email" mode="outlined" theme={darkTheme} value={this.state.email} style={Styles.textInputAuth}
                    onChangeText={email => { this.setState({ email }) }}
                />
                <TextInput label="Password" mode="outlined" theme={darkTheme} value={this.state.password} style={Styles.textInputAuth} secureTextEntry
                    onChangeText={password => { this.setState({ password }) }}
                />
            </View>
        );
    }

    renderBottom = () => {
        return (
            <View style={Styles.bottomAuth}>
                <Text theme={darkTheme}>Belum punya akun?</Text>
                <Text theme={darkTheme} style={Styles.textAuthAuthGoTo} onPress={this.onPressRegister}>Register</Text>
            </View>
        );
    }

    render() {
        return (
            <ImageBackground source={Images.background.backgroundLogin} style={{ flex: 1 }}>
                <Container style={Styles.containerAuth}>
                    <Image source={Images.logo.bannerWhite} style={Styles.imageAuth} />
                    {this.renderInput()}
                    {ButtonLoginRegister("LOGIN", this.onPressLogin, this.state.isFetching)}
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

export default connect(null, mapDispatchToProps)(LoginScreen);