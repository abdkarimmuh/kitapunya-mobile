import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, SafeAreaView, RefreshControl, ToastAndroid } from "react-native";
import { EmptyData } from "@app/containers";
import { Loading, Container, Card } from "@app/components";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";
import { Api } from "@app/api";
import NavigationServices from "@app/services/NavigationServices";

import { STATUS_1, STATUS_2, STATUS_3, STATUS_4, STATUS_5, STATUS_6, STATUS_7 } from "@app/assets/strings";

import UserRedux from "@app/redux/user";

type Props = {
    token: string,
}

class HistoryScreen extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            refreshingHistory: true
        }
    }

    onRefresh = () => {
        this.setState({ refreshingHistory: true });
        this.getHistory();
    }

    componentDidMount = () => {
        this.getHistory();
    }

    getHistory = async () => {
        let data = []
        Api.get()
            .history(this.props.token)
            .then(res => {
                data = res.data.data
                console.log("res history", res);
                if (res.status === 200) {
                    this.setState({ refreshingHistory: false, data: data });
                } else if (res.status != 200) {
                    this.setState({ refreshingHistory: false, });
                    ToastAndroid.show("Data tidak ditemukan", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                ToastAndroid.show("Error", ToastAndroid.SHORT);
                this.setState({ error: true, refreshingHistory: false });
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

    pressDetail = (id) => {
        NavigationServices.navigate("DetailHistory", { title: "Detail Riwayat", id: id });
    }

    render() {
        return (
            <View style={Styles.containerDefault}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView style={Styles.containerDefault} refreshControl={
                        <RefreshControl refreshing={this.state.refreshingHistory} onRefresh={this.onRefresh.bind(this)} />
                    }>
                        <Container style={{ paddingVertical: 12 }}>
                            {this.state.refreshingHistory && <Loading />}
                            {this.state.data === null || this.state.data.length == 0 && <View style={{ paddingVertical: 12 }}><EmptyData /></View>}
                            {
                                this.state.data.map((item, index) => (
                                    <Card
                                        style={Styles.cardHistory}
                                        onPress={() => this.pressDetail(item.id)}
                                        key={index}>
                                        <Text style={Styles.textHeaderHistory}>{item.title}</Text>
                                        <View style={Styles.containerRowSpaceBetween}>
                                            <View style={[Styles.containerStatusHistory, { backgroundColor: this.statusColor(item.status) }]}>
                                                <Text style={Styles.textStatusHistory}>{this.statusName(item.status)}</Text>
                                            </View>
                                            <Text style={Styles.textDateHistory}>{item.date}</Text>
                                        </View>
                                    </Card>
                                ))
                            }
                        </Container>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(HistoryScreen)