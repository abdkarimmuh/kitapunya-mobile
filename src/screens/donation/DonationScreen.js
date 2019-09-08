import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import { 
    Container, 
    Text, 
    Button, 
    Caption, 
    TextInput, 
    Checkbox 
} from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images"
import NavigationServices from "@app/services/NavigationServices";

const Divider = (
    <View style={{ marginVertical: 12 }}></View>
);

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

    componentDidMount(){

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
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => { this.setState({ checked: !checked }); }}
                />
                <Caption> Anonim</Caption>
            </View>
            
        );
    }

    renderButtonSubmit = () => {
        return(
            <View style={{flexDirection: "row", alignSelf: "flex-end"}}>
                <Button
                    mode="contained"
                    onPress={() => (NavigationServices.goBack())}
                    dark
                    style={{ marginRight: 8, backgroundColor: Color.grey }}
                    >BATAL</Button>
                <Button
                    mode="contained"
                    onPress={() => (this.postDonation("Image", this.state.id))}
                    dark
                    >DONASI</Button>
            </View>
        );
    }

    renderTitle = () => {
        return (
            <View>
                <Text>Campaign</Text>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Judul Campaign</Text>
            </View>
        );
    }

    renderBarang = () => {
        return(
            this.state.item.map((data, index) => (
                <View key={index}>
                <View style={Styles.containerBarang}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Checkbox
                            status={data.check ? "checked" : "unchecked"}
                            onPress={() => {
                                let itemCopy = JSON.parse(JSON.stringify(this.state.item))
                                itemCopy[index].check = !data.check
                                this.setState({
                                    item:itemCopy 
                                }) 
                            }}
                        />
                        <Caption>{data.name}</Caption>
                    </View>
                </View>
                {data.check && 
                <View style={Styles.containerOptionBarang}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <TextInput
                            style={{ backgroundColor: Color.white, width: "45%", marginLeft: 24 }}
                            label="Jumlah"
                            keyboardType={"number-pad"}
                            value={data.qty}
                            onChangeText={qty => {
                                let itemCopy = JSON.parse(JSON.stringify(this.state.item))
                                itemCopy[index].qty = qty
                                this.setState({
                                    item:itemCopy 
                                }) 
                            }}
                        />
                        <Button
                            mode="contained"
                            onPress={() => (this.pressImage())}
                            dark
                            icon="camera"
                            style={{ width: "45%", backgroundColor: Color.black4A }}
                            labelStyle={{color: Color.white}}>Upload Image</Button>
                    </View>
                </View>
                }
                </View>
            ))
        );
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: Color.backgroudDefault}}>
                <View>
                <Container>
                    {this.renderTitle()}
                </Container>
                <View>
                {this.renderBarang()} 
                </View>    
                <Container>
                    <TextInput
                        style={{ backgroundColor: Color.white }}
                        label="Alamat"
                        value={this.state.text}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={text => this.setState({ text })}
                    />
                    {Divider}
                    <Button
                        mode="contained"
                        onPress={() => (this.pressLocataion())}
                        dark
                        style={{ backgroundColor: Color.black4A }}
                        labelStyle={{color: Color.white}}>
                        <Image source={Images.icon.maps} style={Styles.imgBtn} />
                        <Text style={{ color: Color.white }}>   LOKASI</Text>
                    </Button>
                    {Divider}
                    <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 16}}>
                        {this.renderChecked()}
                        {this.renderButtonSubmit()}
                    </View>
                </Container>
                </View>
            </ScrollView>
        );
    }
}