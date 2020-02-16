import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Container } from "@app/components";
import Styles from "@app/assets/styles";
import { MarkdownView } from "react-native-markdown-view";

export default class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            about: undefined,
        };
    }

    componentDidMount() {
        this.setState({
            about: "MD"
        })
    }

    render() {
        return (
            <View style={Styles.containerDefault}>
                <Container>
                    <MarkdownView>
                        {this.state.about}
                    </MarkdownView>
                </Container>
            </View>
        );
    }
}