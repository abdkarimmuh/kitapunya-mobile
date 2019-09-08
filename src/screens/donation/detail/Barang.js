import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import {
    Container,
    Text
} from "@app/components";
import Color from "@app/assets/colors";

export default class BarangScreen extends Component {

    renderHeader = () => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: Color.grey }}>Nama Barang</Text>
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                    <View style={{ width: 100, alignItems: "center" }}>
                        <Text style={{ color: Color.grey }}>Tersedia</Text>
                    </View>
                    <View style={{ width: 100, alignItems: "center" }}>
                        <Text style={{ color: Color.grey }}>Dibutuhkan</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderItem = ({data}) => {
        return (
            <View style={{ marginTop: 24 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: "500", fontSize: 18 }}>Mukena</Text>
                    <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                        <View style={{ width: 100, alignItems: "center" }}>
                            <Text style={{ fontWeight: "500", fontSize: 16 }}>{data}</Text>
                        </View>
                        <View style={{ width: 100, alignItems: "center" }}>
                            <Text style={{ fontWeight: "500", fontSize: 16 }}>20</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: Color.dividerColor, marginTop: 12 }}/>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
                <Container>
                    {this.renderHeader()}
                    {this.renderItem({data:this.props.data})}
                    {this.renderItem({data:this.props.data})}
                </Container>
            </ScrollView>
        );
    }
}