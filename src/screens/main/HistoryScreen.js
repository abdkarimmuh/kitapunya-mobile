import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";

import { EmptyData } from "@app/containers";
import { Loading, Container, Caption } from "@app/components";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles"

import Images from "@app/assets/images";
import Mock from "@app/api/mock";

import { STATUS_JEMPUT, STATUS_KIRIM, STATUS_SALURKAN, STATUS_TERIMA, STATUS_TOLAK } from "@app/assets/strings";

export default class HistoryScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [],
            isFetching: true
        }
    }
    
    componentDidMount = () => {
        this.getHistoryMock();
    }
    
    getHistoryMock = () =>{
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
    
    getStatus(status) {
        if(status==1) {
            return STATUS_JEMPUT
        } else if(status==2) {
            return STATUS_TERIMA
        } else if(status==3) {
            return STATUS_KIRIM
        } else if(status==4) {
            return STATUS_SALURKAN
        } else {
            return STATUS_TOLAK
        }
    }

    getStatusDot(status) {
        if(status==1) {
            return Images.icon.dot_jemput
        } else if(status==2) {
            return Images.icon.dot_terima
        } else if(status==3) {
            return Images.icon.dot_kirim
        } else if(status==4) {
            return Images.icon.dot_salurkan
        } else {
            return Images.icon.dot_tolak
        }
    }
    
    render() {
        return (
            <ScrollView style={{backgroundColor: Color.backgroudDefault}}>
                <Container style={{ paddingBottom: 0 }}>
                    { this.state.isFetching && <Loading/> }
                    { this.state.data===null && <EmptyData/> }
                    {
                        this.state.data.map((d) => (
                        <View key={d.id} style={Styles.containerHistory}>
                            <View style={Styles.containerHistoryStatus}>
                                <Image source={this.getStatusDot(d.status)} style={Styles.imgStatus} />
                                <View>
                                    <Text style={Styles.titleStatus}>{this.getStatus(d.status)}</Text>
                                    <Text>{d.title}</Text>
                                </View>
                            </View>
                            <Caption>{d.date}</Caption>
                        </View>
                        ))
                    }    
                </Container>
            </ScrollView>
        );
    }
}