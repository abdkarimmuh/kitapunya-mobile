import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Text, View, Image, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import { Container } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Api } from "@app/api";
import { NavigationServices, AsyncStorage } from "@app/services";

import UserRedux from "@app/redux/user";

const Divider = (
    <View style={{ marginHorizontal: 24, marginTop: 12, backgroundColor: Color.dividerColor, height: 1 }} />
);

type Props = {
    token: string,
    name: string,
    email: string,
    path_photo: string,
}

class ProfileScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }

    componentDidMount() {

    }

    pressEditProfil = () => {
        NavigationServices.navigate("EditProfile", { title: "Edit Profil" });
    }

    pressGantiPassword = () => {
        NavigationServices.navigate("ChangePassword", { title: "Ganti Password" });
    }

    pressTentangKami = () => {
        NavigationServices.navigate("AboutUs", { title: "Tentang Kami" });
    }

    pressLogout = async () => {
        Api.get()
            .logout(this.props.token)
            .then(res => {
                console.log("Res Logout", res)
                if (res.status === 200) {
                    ToastAndroid.show("Berhasil", ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show("Gagal", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
            });

        await AsyncStorage.StoreData("token", "")
        NavigationServices.resetStackNavigate(["Auth"])
    }

    renderHeader = () => (
        <View>
            {
                (this.props.path_photo == '' || this.props.path_photo == null)
                    ? <Image style={Styles.imageProfile} source={Images.avatar.avatarWhite} />
                    : <Image style={Styles.imageProfile} source={{ uri: this.props.path_photo }} />
            }
            <Text style={Styles.textHeaderTitleProfile}>Nama</Text>
            <Text style={Styles.textHeaderProfile}>{this.props.name}</Text>
            <Text style={Styles.textHeaderTitleProfile}>Email</Text>
            <Text style={Styles.textHeaderProfile}>{this.props.email}</Text>
        </View>
    );

    renderMenu = () => (
        <View style={{ marginTop: 24 }}>
            <TouchableOpacity onPress={() => this.pressEditProfil()}>
                <View style={Styles.containerMenuProfile}>
                    <View style={Styles.containerRowCenter}>
                        <Image source={Images.icon.settings} style={[Styles.iconDefault, { marginRight: 16 }]} />
                        <Text style={Styles.titleMenuProfile}>Edit Profil</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressGantiPassword()}>
                <View style={Styles.containerMenuProfile}>
                    <View style={Styles.containerRowCenter}>
                        <Image source={Images.icon.lock} style={[Styles.iconDefault, { marginRight: 16 }]} />
                        <Text style={Styles.titleMenuProfile}>Ganti Password</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTentangKami()}>
                <View style={Styles.containerMenuProfile}>
                    <View style={Styles.containerRowCenter}>
                        <Image source={Images.icon.github} style={[Styles.iconDefault, { marginRight: 16 }]} />
                        <Text style={Styles.titleMenuProfile}>Tentang Kami</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressLogout()} style={{ marginTop: 24 }}>
                <View style={Styles.containerMenuProfile}>
                    <View style={Styles.containerRowCenter}>
                        <Image source={Images.icon.logout} style={[Styles.iconDefault, { marginRight: 16 }]} />
                        <Text style={Styles.titleMenuProfile}>Logout</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <ScrollView style={Styles.containerDefault}>
                <View>
                    <Container>{this.renderHeader()}</Container>
                    {Divider}
                    {this.renderMenu()}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    name: UserRedux.selectors.name(state),
    email: UserRedux.selectors.email(state),
    path_photo: UserRedux.selectors.path_photo(state),
})

export default connect(mapStateToProps, null)(ProfileScreen)