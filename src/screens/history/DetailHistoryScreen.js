import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import { Text, Container, Loading } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import { Api } from "@app/api";
import { STATUS_1, STATUS_2, STATUS_3, STATUS_4, STATUS_5, STATUS_6, STATUS_7 } from "@app/assets/strings";
import UserRedux from "@app/redux/user";

type Props = {
    token: string,
}

class DetailHistoryScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            data: {},
            refreshingDetail: true,
            error: false,
        };
    }

    componentDidMount() {
        this.getDetailHistory();
    }

    getDetailHistory = async () => {
        let data = {}
        Api.get()
            .detailHistory(this.props.token, JSON.parse(this.props.navigation.getParam("id")))
            .then(res => {
                data = res.data.data
                console.log("res getDetailHistory", res);
                if (res.status === 200) {
                    this.setState({ refreshingDetail: false, data: data });
                } else if (res.status != 200) {
                    this.setState({ refreshingDetail: false });
                    ToastAndroid.show("Data tidak ditemukan", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                ToastAndroid.show("Error", ToastAndroid.SHORT);
                this.setState({ error: true, refreshingDetail: false });
            });
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
                <Text style={{ fontWeight: "bold" }}>{item.name} </Text>
            </View>
        ))
    }

    render() {
        if (this.state.refreshingDetail) {
            return (<View style={{ padding: 16 }}><Loading /></View>)
        } else {
            return (
                <ScrollView style={Styles.containerDefault}>
                    <Container>
                        <View style={Styles.containerHeaderDetailHistory}>
                            <Text style={Styles.textHeaderDetailHistory}>{this.state.data.title}</Text>
                            <View style={Styles.containerRowCenter}>
                                <Text>No Transaksi : </Text>
                                <Text style={{ fontWeight: "bold" }}>{this.state.data.no_trx}</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 24 }}>
                            <Text>Pembuat</Text>
                            <Text style={Styles.textCampaignerDetailHistory}>{this.state.data.campaigner}</Text>
                        </View>
                        <View style={[Styles.containerRow, { marginBottom: 24 }]}>
                            <View>
                                <Text>Status</Text>
                                <View style={[Styles.containerStatusHistory, { backgroundColor: this.statusColor(this.state.data.status), marginTop: 2 }]}>
                                    <Text style={Styles.textStatusHistory}>{this.statusName(this.state.data.status)}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <Text>Tanggal Donasi</Text>
                                <Text style={Styles.textDateDetailHistory}>{this.state.data.date}</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 24 }}>
                            <Text style={{ marginBottom: 2 }}>Barang yang didonasikan</Text>
                            {this.renderItems(this.state.data.items)}
                        </View>
                        <View>
                            <Text>Alamat penjemputan</Text>
                            <Text style={Styles.textAddressDetailHistory}>{this.state.data.address}</Text>
                        </View>
                    </Container>
                </ScrollView>
            );
        }
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(DetailHistoryScreen)