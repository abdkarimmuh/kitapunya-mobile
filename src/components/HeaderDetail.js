import React, { Component } from "react";
import { Text } from "react-native";
import Logo from "@app/assets/images";

export default class HeaderDetail extends Component {
    render() {
        return (
            <Text style={{ color: '#FFF' }} >{this.props.children}</Text>
        );
    }
}
