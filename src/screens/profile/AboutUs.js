import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Container } from "@app/components";
import Styles from "@app/assets/styles";
import { NavigationServices } from "@app/services";

export default class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={Styles.containerDefault}>
                <Container>
                    <Text>AboutUs</Text>
                </Container>
            </View>
        );
    }
}