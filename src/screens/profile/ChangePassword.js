import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, ToastAndroid } from "react-native";
import { Container, TextInput, Button } from "@app/components";
import { NavigationServices } from "@app/services";
import { Api } from "@app/api";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";

import UserRedux from "@app/redux/user";

const Divider = (
    <View style={{ marginVertical: 6 }}></View>
);

type Props = {
    token: string,
}

class ChangePasswordScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            isFetching: false,
        };
    }

    changePassword = () => {
        const { oldPassword, newPassword, confirmPassword } = this.state;
        this.setState({ isFetching: true });

        if (newPassword != confirmPassword) {
            ToastAndroid.show("Password Tidak Cocok", ToastAndroid.SHORT);
            this.setState({ oldPassword: "", newPassword: "", confirmPassword: "", isFetching: false });
        } else {
            Api.post()
                .changePassword(this.props.token, oldPassword, newPassword)
                .then(res => {
                    console.log("Res login : ", res);
                    if (res.status === 200) {
                        this.setState({ isFetching: false });
                        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
                        if (res.data.status === "Success") {
                            NavigationServices.resetStackNavigate(["Main"]);
                        }
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

    renderButtonSubmit = () => (
        <View style={Styles.containerButtonForm}>
            <Button mode="contained" onPress={() => (NavigationServices.goBack())} dark
                style={Styles.buttonFormCancel} >BATAL</Button>
            <Button mode="contained" onPress={() => (this.changePassword())} dark
                disabled={this.state.isFetching}>SIMPAN</Button>
        </View>
    );

    render() {
        return (
            <View style={Styles.containerDefault}>
                <Container>
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Password Lama"
                        secureTextEntry
                        value={this.state.oldPassword}
                        onChangeText={oldPassword => this.setState({ oldPassword: oldPassword })}
                    />
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Password Baru"
                        secureTextEntry
                        value={this.state.newPassword}
                        onChangeText={newPassword => this.setState({ newPassword: newPassword })}
                    />
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Konfirmasi Password"
                        secureTextEntry
                        value={this.state.confirmPassword}
                        onChangeText={confirmPassword => this.setState({ confirmPassword: confirmPassword })}
                    />
                    {this.renderButtonSubmit()}
                </Container>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(ChangePasswordScreen)