import React, { Component } from "react";
import { Text, ScrollView } from 'react-native';
import { DonaturItem, Container } from '@app/components';

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
                    <DonaturItem />
                    <DonaturItem />
                    <DonaturItem />
                </Container>
            </ScrollView>
        );
    }
}