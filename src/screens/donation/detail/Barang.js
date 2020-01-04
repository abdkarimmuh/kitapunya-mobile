import React, { PureComponent } from "react";
import { ScrollView, View } from "react-native";
import { Container, Text } from "@app/components";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";
import { EmptyContent } from "@app/containers";

export default class BarangScreen extends PureComponent {

    renderHeader = () => {
        return (
            <View style={Styles.containerRow}>
                <Text style={{ color: Color.grey }}>Nama Barang</Text>
                <View style={Styles.containerRowFlexEnd}>
                    <View style={Styles.textTitleBarang}>
                        <Text style={{ color: Color.grey }}>Tersedia</Text>
                    </View>
                    <View style={Styles.textTitleBarang}>
                        <Text style={{ color: Color.grey }}>Dibutuhkan</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderItem = ({ data }) => (
        data.map((item, index) => (
            <View style={{ marginTop: 24 }} key={index}>
                <View style={Styles.containerRow}>
                    <Text style={Styles.textFieldBarang}>{item.name}</Text>
                    <View style={Styles.containerRowFlexEnd}>
                        <View style={Styles.textTitleBarang}>
                            <Text style={Styles.textFieldBarang}>{item.real_qty}</Text>
                        </View>
                        <View style={Styles.textTitleBarang}>
                            <Text style={Styles.textFieldBarang}>{item.max_qty}</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.dividerTableBarang} />
            </View>
        ))
    )

    render() {
        if (this.props.data == null || this.props.data.length == 0) {
            return (
                <ScrollView style={Styles.containerDefault}>
                    <Container>
                        <EmptyContent content={"Barang Kosong"} />
                    </Container>
                </ScrollView>
            );
        } else {
            return (
                <ScrollView style={Styles.containerDefault}>
                    <Container>
                        {this.renderHeader()}
                        {this.renderItem({ data: this.props.data })}
                    </Container>
                </ScrollView>
            );
        }
    }
}