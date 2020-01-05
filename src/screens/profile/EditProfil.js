import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Image, ToastAndroid, TouchableOpacity } from "react-native";
import { Container, TextInput, Button } from "@app/components";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import { Api } from "@app/api";
import { NavigationServices } from "@app/services";
import ImagePicker from "react-native-image-picker";

import UserRedux from "@app/redux/user";

const options = {
    title: "Pilih Foto",
    takePhotoButtonTitle: "Gunakan Kamera",
    chooseFromLibraryButtonTitle: "Pilih dari Galeri",
    noData: false,
    quality: 0.6,
    mediaType: "photo",
    allowsEditing: false,
    cancelButtonTitle: "Batal",
    storageOptions: {
        skipBackup: true,
        path: "images"
    }
}

const Divider = (
    <View style={{ marginVertical: 6 }}></View>
);

type Props = {
    name: string,
    email: string,
    token: string,
    path_photo: string,
}

class EditProfil extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            error: false,
            name: "",
            email: "",
            file: undefined, // base64,
            fileName: undefined,
            fileSize: undefined,
            uri: undefined
        };
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            email: this.props.email,
            uri: this.props.path_photo,
        })
    }

    pressImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log("Response ImagePicker : ", response)
            if (response.didCancel) {
                console.log("User cancelled image picker")
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error)
            } else {
                const { fileName, fileSize, data, uri } = response
                this.setState({ fileName, fileSize, file: "data:image/jpeg;base64," + data, uri: uri })
            }
        })
    }

    updateUser = async () => {
        Api.post()
            .updateProfile(this.props.token, this.state.name, this.state.email, this.state.file)
            .then(res => {
                console.log("res updateUser", res);
                if (res.status === 200) {
                    this.setState({ isFetching: false });
                    ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
                    NavigationServices.resetStackNavigate(["Main"]);
                } else if (res.status == 401) {
                    this.setState({ isFetching: false });
                    ToastAndroid.show(res.data.error, ToastAndroid.SHORT);
                } else {
                    this.setState({ isFetching: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                ToastAndroid.show("Error", ToastAndroid.SHORT);
                this.setState({ error: true, isFetching: false });
            });
    }

    renderButtonSubmit = () => (
        <View style={Styles.containerButtonForm}>
            <Button mode="contained" onPress={() => (NavigationServices.goBack())} dark
                style={Styles.buttonFormCancel} >BATAL</Button>
            <Button mode="contained" onPress={() => (this.updateUser())} dark
                disabled={this.state.isFetching} >SIMPAN</Button>
        </View>
    );

    render() {
        return (
            <>
                <View style={Styles.containerDefault}>
                    <Container>
                        <TouchableOpacity style={Styles.imageProfile} onPress={() => this.pressImage()}>
                            {
                                (this.state.uri == '' || this.state.uri == null)
                                    ? <Image style={Styles.imageProfile} source={Images.avatar.avatarWhite} />
                                    : <Image style={Styles.imageProfile} source={{ uri: this.state.uri }} />
                            }
                        </TouchableOpacity>
                        <TextInput
                            style={{ backgroundColor: Color.transparent }}
                            label="Name"
                            value={this.state.name}
                            onChangeText={name => this.setState({ name: name })}
                        />
                        {Divider}
                        <TextInput
                            style={{ backgroundColor: Color.transparent }}
                            label="Email"
                            keyboardType={"email-address"}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email: email })}
                        />
                        {this.renderButtonSubmit()}
                    </Container>
                </View>
                <Image style={Styles.editImageProfile} source={Images.avatar.avatarEdit} />
            </>
        );
    }
}
const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    name: UserRedux.selectors.name(state),
    email: UserRedux.selectors.email(state),
    path_photo: UserRedux.selectors.path_photo(state),
})

export default connect(mapStateToProps, null)(EditProfil)