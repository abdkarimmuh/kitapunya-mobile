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

class RegisterScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confrimPassword: "",
            isFetching: false
        }
    }

    onPressLogin = async () => {
        console.log("Login");
        NavigationServices.navigate("Login");
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

    onPressRegister = () => {
        this.setState({ isFetching: true });
        const { name, email, password, confrimPassword } = this.state;

        if (name == "" || email == "" || password == "" || confrimPassword == "") {
            this.setState({ isFetching: false });
            ToastAndroid.show("Input tidak lengkap", ToastAndroid.SHORT);
        } else {
            if (password == confrimPassword) {
                Api.post()
                    .register(name, email, password)
                    .then(res => {
                        console.log("Res register : ", res);
                        if (res.status === 200) {
                            AsyncStorage.StoreData("token", res.data.token);
                            this.getUser(res.data.token);
                            this.props.setToken(res.data.token);
                        } else if (res.status == 401) {
                            this.setState({ isFetching: false });
                            ToastAndroid.show(JSON.stringify(res.data.error), ToastAndroid.SHORT);
                        } else {
                            this.setState({ isFetching: false });
                            ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                        }
                    })
                    .catch(error => {
                        console.log("ERROR", error);
                        this.setState({ error: true });
                    });
            } else {
                this.setState({ password: "", confrimPassword: "", isFetching: false })
                ToastAndroid.show("Password tidak sama", ToastAndroid.SHORT);
            }
        }
    };

    renderInput = () => {
        return (
            <View>
                <TextInput label="Name" mode="outlined" theme={darkTheme} value={this.state.name} style={Styles.textInputAuth}
                    onChangeText={name => { this.setState({ name }) }}
                />
                <TextInput label="Email" mode="outlined" theme={darkTheme} value={this.state.email} style={Styles.textInputAuth}
                    onChangeText={email => { this.setState({ email }) }} keyboardType={"email-address"}
                />
                <TextInput label="Password" mode="outlined" theme={darkTheme} value={this.state.password} style={Styles.textInputAuth} secureTextEntry
                    onChangeText={password => { this.setState({ password }) }}
                />
                <TextInput label="Konfirmasi Password" mode="outlined" theme={darkTheme} value={this.state.confrimPassword} style={Styles.textInputAuth} secureTextEntry
                    onChangeText={confrimPassword => { this.setState({ confrimPassword }) }}
                />
            </View>
        );
    }

    renderBottom = () => {
        return (
            <View style={Styles.bottomAuth}>
                <Text theme={darkTheme}>Sudah punya akun?</Text>
                <Text theme={darkTheme} style={Styles.textAuthAuthGoTo} onPress={this.onPressLogin}>Login</Text>
            </View>
        )
    }

    render() {
        return (
            <ImageBackground source={Images.background.backgroundLogin} style={{ flex: 1 }}>
                <Container style={Styles.containerAuth}>
                    <Image source={Images.logo.bannerWhite} style={Styles.imageAuth} />
                    {this.renderInput()}
                    {ButtonLoginRegister("REGISTER", this.onPressRegister, this.state.isFetching)}
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