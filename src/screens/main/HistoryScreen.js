import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import { EmptyData } from "@app/containers";
import { Loading, Container, Title, Paragraph, Caption, Subheading } from "@app/components";
import Color from "@app/assets/colors";
import Style from "@app/assets/styles"

import Mock from "@app/api/mock";

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
    
    getStatusStyle(status) {
        if(status==1) {
            return {
                color: Color.textDiproses,
            }
        } else if(status==2) {
            return {
                color: Color.textDiterima
            }
        } else if(status==3) {
            return {
                color: Color.textDikirim
            }
        } else if(status==4) {
            return {
                color: Color.textDisalurkan
            }
        } else {
            return {
                color: Color.textDitolak
            }
        }
    }
    
    getStatus(status) {
        if(status==1) {
            return "Diproses"
        } else if(status==2) {
            return "Diterima"
        } else if(status==3) {
            return "Dikirim"
        } else if(status==4) {
            return "Disalurkan"
        } else {
            return "Ditolak"
        }
    }
    

    render() {
        return (
            <ScrollView>
                <Container style={{ padding: 8 }}>
                    { this.state.isFetching && <Loading/> }
                    { this.state.data===null && <EmptyData/> }
                    {
                        this.state.data.map((d) => (
                        <View key={d.id} style={{ marginBottom: 8, padding: 8 }}>
                            {/* <ListItem
                                hideChevron={true}
                                title={d.title}
                                subtitle={this.getStatus(d.status)}
                                rightTitle={d.date}
                                titleStyle={styles.titleStyle}
                                subtitleStyle={[styles.subtitleStyle, this.getStatusStyle(d.status)]}
                            /> */}
                            <View>
                                <Title>{ d.title }</Title>
                                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                    <Subheading style={this.getStatusStyle(d.status)}>{ this.getStatus(d.status) }</Subheading>
                                    <Caption>{ d.date }</Caption>
                                </View>
                            </View>
                        </View>
                        ))
                    }    
                </Container>
            </ScrollView>
        );
    }
}