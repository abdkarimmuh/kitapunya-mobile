import React, { Component } from "react";
import { Image, View } from 'react-native';
import { Container, Card, Avatar } from '@app/components';
import Style from '@app/assets/styles';
import Images from '@app/assets/images';
import Color from '@app/assets/colors';
import { Metrics } from '@app/themes';

export default class DonaturItem extends Component {

    renderAvatar = () => {
        return (
            <Avatar.Image source={Images.avatar.avatarDefault} size={32} />
        )
    }

    render() {
        return (
            <Container>
                <Card onPress={() => console.log("Donatur Press")}>
                    <Card.Title
                        title="Card Title"
                        subtitle="Card Subtitle"
                        left={() => this.renderAvatar()} />
                </Card>
            </Container>
        );
    }
}