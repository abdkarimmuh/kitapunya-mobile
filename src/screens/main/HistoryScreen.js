import React, { PureComponent } from "react";
import { Text, View, ScrollView } from "react-native";
import { EmptyData } from "@app/containers";
import { Loading, Container, Card } from "@app/components";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";
import Mock from "@app/api/mock";
import NavigationServices from "@app/services/NavigationServices";

import { STATUS_1, STATUS_2, STATUS_3, STATUS_4, STATUS_5, STATUS_6, STATUS_7 } from "@app/assets/strings";

export default class HistoryScreen extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isFetching: true
        }
    }

    componentDidMount = () => {
        this.getHistoryMock();
    }

    getHistoryMock = () => {
        Mock.create()
            .getHistory()
            .then(res => {
                this.setState({ data: res.data, isFetching: false })
            })
            .catch(err => {
                console.log("ERR", err)
                this.setState({
                    error: true
                })
            })
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
        NavigationServices.navigate("DetailHistory", { title: "Detail Riwayat" });
    }

    render() {
        return (
            <ScrollView style={Styles.containerDefault}>
                <Container style={{ paddingVertical: 12 }}>
                    {this.state.isFetching && <Loading />}
                    {this.state.data === null && <EmptyData />}
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
        );
    }
}