import React, { PureComponent } from "react";
import { Image, View, ScrollView } from "react-native";
import { Card, Text, Caption, ProgressBar, Container } from "@app/components";
import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import Color from "@app/assets/colors";
import NavigationServices from "@app/services/NavigationServices";
import { Metrics } from "@app/themes";

import { STATUS_1, STATUS_2, STATUS_3, STATUS_4, STATUS_5, STATUS_6, STATUS_7 } from "@app/assets/strings";

export default class DetailHistory extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            title: "Ayo Wakaf Mukena",
            no_trx: "DO123456789",
            campaigner: "Yayasan Mukena Bersih",
            status: 1,
            date_donation: "20 Desember 2019",
            address: "Komplek Industri Kapal Dalam, Block DD No. 13, Kelurahan Tugu, Kecamatan Cimanggis, Kota Depok",
            items: [
                {
                    item_name: "Mukena",
                    qty: 2
                },
                {
                    item_name: "Sajadah",
                    qty: 1
                }
            ]
        };
    }

    statusName(status) {
        if (status == 1) {
            return STATUS_1
        } else if (status == 2) {
            return STATUS_2
        } else if (status == 3) {
            return STATUS_3
        } else if (status == 4) {
            return STATUS_4
        } else if (status == 5) {
            return STATUS_5
        } else if (status == 6) {
            return STATUS_6
        } else if (status == 7) {
            return STATUS_7
        } else {
            return "Status Not Found"
        }
    }

    statusColor(status) {
        if (status == 1) {
            return Color.status1
        } else if (status == 2) {
            return Color.status2
        } else if (status == 3) {
            return Color.status3
        } else if (status == 4) {
            return Color.status4
        } else if (status == 5) {
            return Color.status5
        } else if (status == 6) {
            return Color.status6
        } else if (status == 7) {
            return Color.status7
        } else {
            return Color.black
        }
    }

    renderItems = (items) => {
        return items.map((item, index) => (
            <View key={index} style={Styles.containerItemsDetailHistory}>
                <Text style={{ fontWeight: "bold" }}>− </Text>
                <Text style={{ fontWeight: "bold" }}>{item.qty} </Text>
                <Text style={{ fontWeight: "bold" }}>{item.item_name} </Text>
            </View>
        ))
    }

    render() {
        return (
            <ScrollView style={Styles.containerDefault}>
                <Container>
                    <View style={Styles.containerHeaderDetailHistory}>
                        <Text style={Styles.textHeaderDetailHistory}>{this.state.title}</Text>
                        <View style={Styles.containerRowCenter}>
                            <Text>No Transaksi : </Text>
                            <Text style={{ fontWeight: "bold" }}>{this.state.no_trx}</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 24 }}>
                        <Text>Pembuat</Text>
                        <Text style={Styles.textCampaignerDetailHistory}>{this.state.campaigner}</Text>
                    </View>
                    <View style={[Styles.containerRow, { marginBottom: 24 }]}>
                        <View>
                            <Text>Status</Text>
                            <View style={[Styles.containerStatusHistory, { backgroundColor: this.statusColor(this.state.status), marginTop: 2 }]}>
                                <Text style={Styles.textStatusHistory}>{this.statusName(this.state.status)}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text>Tanggal Donasi</Text>
                            <Text style={Styles.textDateDetailHistory}>{this.state.date_donation}</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 24 }}>
                        <Text style={{ marginBottom: 2 }}>Barang yang didonasikan</Text>
                        {this.renderItems(this.state.items)}
                    </View>
                    <View>
                        <Text>Alamat penjemputan</Text>
                        <Text style={Styles.textAddressDetailHistory}>{this.state.address}</Text>
                    </View>
                </Container>
            </ScrollView>
        );
    }
}