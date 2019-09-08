import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { DonationItem, Container } from "@app/components";

const styles = StyleSheet.create({
    containerCard: {
        marginBottom: 24
    },
});

export default class ListDonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            error: false
        };
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <View style={styles.containerCard}>
                        <DonationItem />
                    </View>
                    <View style={styles.containerCard}>
                        <DonationItem />
                    </View>
                </Container>
            </ScrollView>
        );
    }
}