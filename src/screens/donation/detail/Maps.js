import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Image, View, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import { NavigationServices } from "@app/services";

import MapsRedux from "@app/redux/maps";

type Props = {
    setData: any => void,
    long: string,
    lat: string
}

class MapsScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            mapRegion: null,
            lastLat: null,
            lastLong: null,
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition((position) => {
            console.log('Geolocation : ', position)
            // Create the object to update this.state.mapRegion through the onRegionChange function
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            this.onRegionChange(region, region.latitude, region.longitude);
        }, (error) => console.log(error));
    }

    onRegionChange(region) {
        this.setState({
            mapRegion: region,
            // If there are no new values set the current ones
            lastLat: region.latitude,
            lastLong: region.longitude
        });
    }

    onPressSetMaps = () => {
        this.props.setData({
            lat: this.state.lastLat,
            long: this.state.lastLong
        })

        console.log('long : ', this.props.long);
        console.log('lat : ', this.props.lat);

        NavigationServices.goBack();
    }

    renderButton = () => {
        return (
            <View style={Styles.containerButtonSetMaps}>
                <TouchableOpacity
                    onPress={() => this.onPressSetMaps()}
                    style={Styles.buttonSetMaps}
                >
                    <Image source={Images.icon.mapWhite} style={Styles.imageSetMaps} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={Styles.containerDefault}>
                {this.state.mapRegion != null &&
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        region={this.state.mapRegion}
                        showsUserLocation={true}
                        followUserLocation={true}
                        onRegionChange={this.onRegionChange.bind(this)}
                    >
                        {
                            (this.state.lastLat != null && this.state.lastLong != null) &&
                            <Marker
                                coordinate={{
                                    latitude: this.state.lastLat,
                                    longitude: this.state.lastLong,
                                }}>
                            </Marker>
                        }
                    </MapView>
                }
                {this.state.mapRegion != null && this.renderButton()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    long: MapsRedux.selectors.long(state),
    lat: MapsRedux.selectors.lat(state),
})

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(MapsRedux.actions.setData({ data })),
})

export default connect(mapStateToProps, mapDispatchToProps)(MapsScreen);