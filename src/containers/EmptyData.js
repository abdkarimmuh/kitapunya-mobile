import React, { Component } from "react";
import { Card, Title } from "react-native-paper";

export default class EmptyData extends Component {
    render() {
        return (
            <Card style={{ widht: "100%", padding: 24 }}>
                <Card.Content>
                    <Title style={{ textAlign: "center" }}>Data Kosong</Title>
                </Card.Content>
            </Card>
        );
    }
}