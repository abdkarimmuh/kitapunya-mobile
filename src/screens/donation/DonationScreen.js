import React, { Component } from "react";
import { View, Image, ScrollView } from 'react-native';
import { Container, Avatar, Subheading, Button, ProgressBar, Caption, Title, Paragraph } from '@app/components';
import PhotoUpload from 'react-native-photo-upload'
import Images from '@app/assets/images';
import Style from '@app/assets/styles';
import Color from '@app/assets/colors';
import { LOREMIPSUM } from '@app/assets/strings';
import { Metrics } from '@app/themes';
import NavigationServices from '@app/services/NavigationServices';

export default class DonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            error: false
        };
    }

    renderUploadImage = () => {
        return(
            <PhotoUpload
                onPhotoSelect={avatar => {
                if (avatar) {
                    console.log('Image base64 string: ', avatar)
                }
                }}
            >
                <Image
                    style={{ width: Metrics.DEVICE_WIDTH }}
                    resizeMode='cover'
                    source={Images.other.uploadImage}
                />
            </PhotoUpload>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderUploadImage()}
            </ScrollView>
        );
    }
}