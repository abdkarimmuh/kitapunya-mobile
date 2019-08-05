import React, { Component } from "react";
import { View, Image, Text } from 'react-native';
import { HomeMenu } from '@app/containers';
import { Mock } from '@app/api';
import Carousel from 'react-native-banner-carousel';
import Styles from '@app/assets/styles';
import { Metrics } from '@app/themes'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carousel: [],
            error: false
        };
    }

    componentDidMount() {
        this.getCarouselMock();
    }

    getCarouselMock = async () => {
        Mock.create()
            .getCarousel()
            .then(res => {
                this.setState({ carousel: res.data })
            })
            .catch(err => {
                console.log('ERR', err)
                this.setState({
                    error: true
                })
            })
    }

    carouselHome = () => {
        return (
            <View style={Styles.carouselContainer}>
                <Carousel
                    autoplay
                    playTime={2000}
                    loop
                    index={0}
                    pageSize={Metrics.DEVICE_WIDTH} >
                    {
                        this.state.carousel.map((d) => (
                            <View key={d.id}>
                                <Image style={{ width: Metrics.DEVICE_WIDTH, height: Metrics.HightCarousel }} source={{ uri: d.images }} />
                            </View>
                        ))
                    }
                </Carousel>
            </View>
        )
    };

    render() {
        if (this.state.carousel.length == 0) {
            return (<View></View>)
        } else {
            return (
                <View>
                    {this.carouselHome()}
                    <HomeMenu></HomeMenu>
                </View>
            );
        }
    }
}