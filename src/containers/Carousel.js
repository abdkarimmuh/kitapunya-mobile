import React, { Component } from "react";
import Carousel from 'react-native-banner-carousel';
import { View, Image } from 'react-native';
import Styles from '@app/assets/styles';
import { Metrics } from '@app/themes';

const CarouselHome = (data) => (
    <View style={Styles.carouselContainer}>
        <Carousel
            autoplay
            playTime={2000}
            loop
            index={0}
            pageSize={Metrics.DEVICE_WIDTH} >
            {
                data.map((d) => (
                    <View key={d.id}>
                        <Image width={Metrics.DEVICE_WIDTH} source={{ uri: d.images }} />
                    </View>
                ))
            }
        </Carousel>
    </View>
);

export default CarouselHome;
