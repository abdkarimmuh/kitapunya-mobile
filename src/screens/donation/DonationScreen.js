import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Image, ScrollView, TouchableOpacity, ToastAndroid } from "react-native";
import { Container, Text, Button, TextInput, Checkbox } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images"
import NavigationServices from "@app/services/NavigationServices";
import { Api } from "@app/api";
import ImagePicker from "react-native-image-picker";
import UserRedux from "@app/redux/user";

const Divider = (
    <View style={{ marginVertical: 12 }}></View>
);

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

type Props = {
    token: string,
}

class DonationScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            location: "",
            anonim: false,
            items: [],
            error: false,
            isFetching: false,
        };
    }

    componentDidMount() {
        this.setItems(JSON.parse(JSON.stringify(this.props.navigation.getParam("barang"))))
    }

    setItems = (items) => {
        var res = []
        items.forEach(data => {
            var items = { id: data.id, check: false, name: data.name, qty: data.qty, file: undefined, fileName: undefined, fileSize: undefined }
            res = res.concat(items)
            this.setState({ items: res })
        })
    }

    pressLocataion = () => {

    }

    pressImage = (index) => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log("Response ImagePicker : ", response)
            if (response.didCancel) {
                console.log("User cancelled image picker")
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error)
            } else {
                const { fileName, fileSize, data } = response
                let itemCopy = JSON.parse(JSON.stringify(this.state.items))
                itemCopy[index].fileName = fileName
                itemCopy[index].fileSize = fileSize
                itemCopy[index].file = "data:image/jpeg;base64," + data
                this.setState({
                    items: itemCopy
                })
            }
        })
    }

    postDonation = async (id) => {
        this.setState({ isFetching: true });

        if (this.state.items.length == 0 || this.state.location == '') {
            this.setState({ isFetching: false });
            ToastAndroid.show("Isi data dengan benar", ToastAndroid.SHORT);
        } else {
            var items = [];
            this.state.items.forEach(data => {
                if (data.check && data.qty > 0) {
                    var data = { id: data.id, name: data.name, qty: data.qty, file: data.file }
                    items = items.concat(data)
                }
            })

            Api.post()
                .donasi(this.props.token, id, this.state.location, this.state.anonim, items)
                .then(res => {
                    console.log("res Donasi", res);
                    if (res.status === 200) {
                        this.setState({ isFetching: false });
                        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
                        NavigationServices.resetStackNavigate(["Main"]);
                    } else if (res.status == 401) {
                        this.setState({ isFetching: false });
                        ToastAndroid.show(res.data.error, ToastAndroid.SHORT);
                    } else if (res.status == 422) {
                        this.setState({ isFetching: false });
                        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
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
    }

    renderChecked = () => {
        const { anonim } = this.state;
        return (
            <View style={Styles.containerRowCenter}>
                <Checkbox
                    status={anonim ? "checked" : "unchecked"}
                    onPress={() => { this.setState({ anonim: !anonim }); }}
                />
                <Text style={Styles.textTitleDonasi}> Anonim</Text>
            </View>

        );
    }

    renderButtonSubmit = () => {
        return (
            <View style={Styles.containerRowFlexEnd}>
                <Button mode="contained" onPress={() => (NavigationServices.goBack())} dark
                    style={Styles.buttonFormCancel} >BATAL</Button>
                <Button mode="contained" onPress={() => (this.postDonation(JSON.parse(this.props.navigation.getParam("id"))))}
                    disabled={this.state.isFetching} dark>DONASI</Button>
            </View>
        );
    }

    renderTitle = () => {
        return (
            <View>
                <Text>Campaign</Text>
                <Text style={Styles.textTitleDonasi}>{JSON.parse(JSON.stringify(this.props.navigation.getParam("judul")))}</Text>
            </View>
        );
    }

    getColorBtnDonation = (file) => {
        if (file == undefined || file == null) {
            return Color.textColor;
        } else {
            return Color.grey;
        }
    }

    renderBarang = () => {
        return (
            this.state.items.map((data, index) => (
                <View key={index}>
                    <View style={Styles.containerBarangDonasi}>
                        <View style={Styles.containerRowCenter}>
                            <Checkbox
                                status={data.check ? "checked" : "unchecked"}
                                onPress={() => {
                                    let itemCopy = JSON.parse(JSON.stringify(this.state.items))
                                    itemCopy[index].check = !data.check
                                    this.setState({
                                        items: itemCopy
                                    })
                                }}
                            />
                            <Text style={Styles.textTitleDonasi}>{data.name}</Text>
                        </View>
                    </View>
                    {data.check &&
                        <View style={Styles.containerOptionBarang}>
                            <View style={Styles.containerRowSpaceBetween}>
                                <TextInput
                                    style={Styles.textInputItemDonasi}
                                    label="Jumlah"
                                    keyboardType={"number-pad"}
                                    value={data.qty}
                                    onChangeText={qty => {
                                        let itemCopy = JSON.parse(JSON.stringify(this.state.items))
                                        itemCopy[index].qty = qty
                                        this.setState({
                                            items: itemCopy
                                        })
                                    }}
                                />
                                <View style={Styles.containerButtonImageDonasi}>
                                    <TouchableOpacity onPress={() => (this.pressImage(index))}>
                                        <View style={[Styles.buttonImageDonasi, { backgroundColor: this.getColorBtnDonation(data.file) }]}>
                                            <Image source={Images.icon.cameraWhite} style={[Styles.iconDefault, { marginRight: 8 }]} />
                                            <Text style={Styles.textButtonImageDonasi}>Upload Image</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                </View>
            ))
        );
    }

    renderDonation = () => (
        <View>
            <Container>
                {this.renderTitle()}
            </Container>
            <View>
                {this.renderBarang()}
            </View>
            <Container>
                <TextInput
                    style={{ backgroundColor: Color.transparent }}
                    label="Alamat"
                    value={this.state.location}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={location => this.setState({ location })}
                />
                {Divider}
                <View style={Styles.containerButtonImageDonasiMap}>
                    <TouchableOpacity onPress={() => (this.pressLocataion())}>
                        <View style={Styles.buttonImageDonasiMap}>
                            <Image source={Images.icon.mapWhite} style={[Styles.iconDefault, { marginRight: 8 }]} />
                            <Text style={Styles.textButtonImageDonasi}>Lokasi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {Divider}
                <View style={[Styles.containerRow, { flex: 1, marginTop: 16 }]}>
                    {this.renderChecked()}
                    {this.renderButtonSubmit()}
                </View>
            </Container>
        </View>
    )

    render() {
        return (
            <ScrollView style={Styles.containerDefault}>
                {this.state.items.length != 0 && this.renderDonation()}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(DonationScreen)