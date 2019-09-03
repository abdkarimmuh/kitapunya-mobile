import React, { Component } from "react";
import { View, Image, ScrollView } from 'react-native';
import { Container, Avatar, Subheading, Button, ProgressBar, Caption, Title, Paragraph, TextInput, Checkbox } from '@app/components';
import PhotoUpload from 'react-native-photo-upload'
import Images from '@app/assets/images';
import Style from '@app/assets/styles';
import Color from '@app/assets/colors';
import { LOREMIPSUM } from '@app/assets/strings';
import { Metrics } from '@app/themes';
import NavigationServices from '@app/services/NavigationServices';

const Divider = (
    <View style={{ marginVertical: 12 }}></View>
);

export default class DonationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            text: '',
            error: false,
            checked: false,
        };
    }

    pressLocataion = () => {

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

    renderChecked = () => {
        const { checked } = this.state;
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: !checked }); }}
                />
                <Caption> Anonim</Caption>
            </View>
            
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderUploadImage()}
                <Container style={{margin: 12}}>
                    <TextInput
                        style={{backgroundColor: Color.white}}
                        label='Barang'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.white }}
                        label='Jumlah'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                    {Divider}
                    <Button
                        icon="map"
                        onPress={() => (this.pressLocataion())}
                        dark
                        style={{ width: '100%', padding: 4 }}>Lokasi</Button>
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.white }}
                        label='Alamat'
                        value={this.state.text}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={text => this.setState({ text })}
                    />
                    {Divider}
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        {this.renderChecked()}
                        <Button
                            mode="contained"
                            onPress={() => (this.pressLocataion())}
                            dark
                            style={{ padding: 4 }}
                            >Donasi</Button>
                    </View>
                </Container>
            </ScrollView>
        );
    }
}