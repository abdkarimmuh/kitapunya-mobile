import React, { Component } from "react";
import { View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Text, Button, Caption, TextInput, Checkbox } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images"
import NavigationServices from "@app/services/NavigationServices";

const Divider = (
    <View style={{ marginVertical: 12 }}></View>
);

const styles = StyleSheet.create({
    containerBtnImage: { width: "45%", backgroundColor: Color.black4A },
    containerBtnImageMap: { width: "100%", backgroundColor: Color.primaryColor },
    btnSubmit: { marginRight: 16, backgroundColor: Color.grey },
    txtTitle: { fontSize: 18, fontWeight: "bold" },
    txtInputItem: { backgroundColor: Color.white, width: "45%", marginLeft: 24 },
    btnImage: { elevation: 4, borderRadius: 4, width: "100%", height: 40, alignItems: "center", justifyContent: "center", backgroundColor: Color.textColor, flexDirection: "row" },
    btnImageMap: { elevation: 4, borderRadius: 4, width: "100%", height: 40, alignItems: "center", justifyContent: "center", backgroundColor: Color.primaryColor, flexDirection: "row" },
    txtBtnImage: { color: Color.white, fontSize: 16 },
});

export default class DonationScreen extends Component {

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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => { this.setState({ checked: !checked }); }}
                />
                <Text style={styles.txtTitle}> Anonim</Text>
            </View>

        );
    }

    renderButtonSubmit = () => {
        return (
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <Button mode="contained" onPress={() => (NavigationServices.goBack())} dark style={styles.btnSubmit}>BATAL</Button>
                <Button mode="contained" onPress={() => (this.postDonation("Image", this.state.id))} dark>DONASI</Button>
            </View>
        );
    }

    renderTitle = () => {
        return (
            <View>
                <Text>Campaign</Text>
                <Text style={styles.txtTitle}>Judul Campaign</Text>
            </View>
        );
    }

    renderBarang = () => {
        return (
            this.state.item.map((data, index) => (
                <View key={index}>
                    <View style={Styles.containerBarang}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                            <Text style={styles.txtTitle}>{data.name}</Text>
                        </View>
                    </View>
                    {data.check &&
                        <View style={Styles.containerOptionBarang}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <TextInput
                                    style={styles.txtInputItem}
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
                                <View style={styles.containerBtnImage}>
                                    <TouchableOpacity onPress={() => (this.pressImage())}>
                                        <View style={styles.btnImage}>
                                            <Image source={Images.icon.cameraWhite} style={Styles.imgBtnDonation} />
                                            <Text style={styles.txtBtnImage}>Upload Image</Text>
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
            <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
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
                        <View style={styles.containerBtnImageMap}>
                            <TouchableOpacity onPress={() => (this.pressLocataion())}>
                                <View style={styles.btnImageMap}>
                                    <Image source={Images.icon.mapWhite} style={Styles.imgBtnDonation} />
                                    <Text style={styles.txtBtnImage}>Lokasi</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {Divider}
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
                            {this.renderChecked()}
                            {this.renderButtonSubmit()}
                        </View>
                    </Container>
                </View>
            </ScrollView>
        );
    }
}