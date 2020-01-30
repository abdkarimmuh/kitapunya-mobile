import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, ActivityIndicator, PermissionsAndroid } from "react-native";
import { NavigationServices, AsyncStorage } from "@app/services";
import { Api } from "@app/api";

import Logo from "@app/assets/images";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";

import UserRedux from "@app/redux/user";

type Props = {
    setData: any => void,
    setToken: any => void,
}

async function requestMapsPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Maps App Location Permission',
                message:
                    'Maps App needs access to your Location ' +
                    'so you can know the location around.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the Location');
        } else {
            console.log('Location permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
}

class SplashScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false
        }
    }

    componentDidMount() {
        requestMapsPermission();
        this.checkToken();
    }

    goToAuth = () => {
        NavigationServices.resetStackNavigate(["Auth"]);
    }

    goToMain = () => {
        NavigationServices.resetStackNavigate(["Main"]);
    }

    getUser = async (token) => {
        this.setState({ isFetching: true });
        Api.get()
            .user(token)
            .then(res => {
                console.log('getUser : ', res);
                setTimeout(() => {
                    if (res.status === 200) {
                        this.props.setData(res.data.data);
                        this.setState({ isFetching: false });
                        this.goToMain();
                    } else {
                        this.setState({ isFetching: false });
                        this.goToAuth();
                    }
                }, 1000);
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ isFetching: false });
                this.goToAuth();
            })
    }

    checkToken = async () => {
        let token = await AsyncStorage.FetchData("token");

        if (token === null || token === undefined) {
            this.goToAuth();
        } else {
            this.props.setToken(token);
            this.getUser(token);
        }

        console.log("token", token);
    }

    loading = () => {
        if (this.state.isFetching) {
            return (<ActivityIndicator size="large" color={Color.primaryColor} />);
        }
    }

    render() {
        console.disableYellowBox = true
        return (
            <View style={Styles.containerSplash}>
                <Image source={Logo.logo.logo} style={Styles.imageSplash} />
                <View style={Styles.textBottomSplash}>{this.loading()}</View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(UserRedux.actions.setData({ data })),
    setToken: data => dispatch(UserRedux.actions.setToken(data))
});

export default connect(null, mapDispatchToProps)(SplashScreen);