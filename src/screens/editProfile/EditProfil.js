import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Container, TextInput, Button } from "@app/components";
import Color from "@app/assets/colors";
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
        <View style={{flexDirection: "row", alignSelf: "flex-end", marginTop: 48}}>
            <Button
                mode="contained"
                onPress={() => (NavigationServices.goBack())}
                dark
                style={{ marginRight: 8, backgroundColor: Color.grey }}
                >BATAL</Button>
            <Button
                mode="contained"
                onPress={() => (this.updateUser())}
                dark
                >DONASI</Button>
        </View>
    );

    render() {
        return (
            <View style={{backgroundColor: Color.backgroudDefault, flex: 1}}>
                <Container>
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Full Name"
                        value={this.state.name}
                        onChangeText={name =>  this.setState({name: name})}
                    />
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Email"
                        keyboardType={"email-address"}
                        value={this.state.email}
                        onChangeText={email =>  this.setState({email: email})}
                    />
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Password"
                        keyboardType={"visible-password"}
                        value={this.state.password}
                        onChangeText={password =>  this.setState({password: password})}
                    />
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Confirm Password"
                        keyboardType={"visible-password"}
                        value={this.state.confirmPassword}
                        onChangeText={confirmPassword =>  this.setState({confirmPassword: confirmPassword})}
                    />
                    <Button
                        mode="contained"
                        onPress={() => (this.pressImage())}
                        dark
                        icon="camera"
                        style={{ marginTop: 32, backgroundColor: Color.black4A }}
                        labelStyle={{color: Color.white}}>Upload Image</Button>
                    {this.renderButtonSubmit()}
                </Container>
            </View>
        );
    }
}