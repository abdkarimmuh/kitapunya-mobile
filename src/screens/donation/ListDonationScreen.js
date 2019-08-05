import React, { Component } from "react";
import { Text, ScrollView } from 'react-native';
import { DonationItem, Container } from '@app/components';

export default class ListDonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            error: false
        };
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <DonationItem />
                    <DonationItem />
                    <DonationItem />
                </Container>
            </ScrollView>
        );
    }
}