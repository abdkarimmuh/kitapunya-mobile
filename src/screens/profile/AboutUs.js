import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Container } from "@app/components";
import Styles from "@app/assets/styles";
import { MarkdownView } from "react-native-markdown-view";
import { Api } from "@app/api";


export default class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            about: undefined,
        };
    }

    componentDidMount() {
        Api.github()
            .readme()
            .then(res => this.setState({
                about: res.data
            }))
    }

    render() {
        return (
            <View style={Styles.containerDefault}>
                <Container style={{ paddingTop: 0 }}>
                    <MarkdownView>
                        {this.state.about}
                    </MarkdownView>
                </Container>
            </View>
        );
    }
}