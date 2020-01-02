import React, { PureComponent } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container, Text, Button, TextInput, Checkbox } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images"
import NavigationServices from "@app/services/NavigationServices";

const Divider = (
    <View style={{ marginVertical: 12 }}></View>
);

export default class DonationScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: "",
            text: "",
            error: false,
            checked: false,
            item: [
                {
                    check: false,
                    name: "Kulit",
                    qty: 0,
                    filePath: ""
                },
                {
                    check: false,
                    name: "Kerang",
                    qty: 0,
                    filePath: ""
                },
            ],
        };
    }

    componentDidMount() {

    }

    pressLocataion = () => {

    }

    pressImage = () => {

    }

    postDonation = (title) => {
        NavigationServices.navigate("DetailCampaign", { title: title });
    }

    renderChecked = () => {
        const { checked } = this.state;
        return (
            <View style={Styles.containerRowCenter}>
                <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => { this.setState({ checked: !checked }); }}
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
                <Button mode="contained" onPress={() => (this.postDonation("Image", this.state.id))} dark>DONASI</Button>
            </View>
        );
    }

    renderTitle = () => {
        return (
            <View>
                <Text>Campaign</Text>
                <Text style={Styles.textTitleDonasi}>Judul Campaign</Text>
            </View>
        );
    }

    renderBarang = () => {
        return (
            this.state.item.map((data, index) => (
                <View key={index}>
                    <View style={Styles.containerBarangDonasi}>
                        <View style={Styles.containerRowCenter}>
                            <Checkbox
                                status={data.check ? "checked" : "unchecked"}
                                onPress={() => {
                                    let itemCopy = JSON.parse(JSON.stringify(this.state.item))
                                    itemCopy[index].check = !data.check
                                    this.setState({
                                        item: itemCopy
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
                                        let itemCopy = JSON.parse(JSON.stringify(this.state.item))
                                        itemCopy[index].qty = qty
                                        this.setState({
                                            item: itemCopy
                                        })
                                    }}
                                />
                                <View style={Styles.containerButtonImageDonasi}>
                                    <TouchableOpacity onPress={() => (this.pressImage())}>
                                        <View style={Styles.buttonImageDonasi}>
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

    render() {
        return (
            <ScrollView style={Styles.containerDefault}>
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
                            value={this.state.text}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => this.setState({ text })}
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
            </ScrollView>
        );
    }
}