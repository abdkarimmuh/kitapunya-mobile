import React, { Component } from "react";
import { View, Image } from "react-native";
import { Container, TextInput, Button } from "@app/components";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import NavigationServices from "@app/services/NavigationServices";

const Divider = (
    <View style={{ marginVertical: 6 }}></View>
);

export default class EditProfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    pressImage = () => {

    }

    updateUser = () => {

    }

    renderButtonSubmit = () => (
        <View style={Styles.containerButtonForm}>
            <Button mode="contained" onPress={() => (NavigationServices.goBack())} dark
                style={Styles.buttonFormCancel} >BATAL</Button>
            <Button mode="contained" onPress={() => (this.updateUser())} dark >SIMPAN</Button>
        </View>
    );

    render() {
        return (
            <>
                <View style={Styles.containerDefault}>
                    <Container>
                        {
                            (this.props.path_photo == '' || this.props.path_photo == null)
                                ? <Image style={Styles.imageProfile} source={Images.avatar.avatarWhite} />
                                : <Image style={Styles.imageProfile} source={{ uri: this.props.path_photo }} />
                        }
                        <TextInput
                            style={{ backgroundColor: Color.transparent }}
                            label="Name"
                            value={this.state.name}
                            onChangeText={name => this.setState({ name: name })}
                        />
                        {Divider}
                        <TextInput
                            style={{ backgroundColor: Color.transparent }}
                            label="Email"
                            keyboardType={"email-address"}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email: email })}
                        />
                        {this.renderButtonSubmit()}
                    </Container>
                </View>
                <Image style={Styles.editImageProfile} source={Images.avatar.avatarEdit} />
            </>
        );
    }
}