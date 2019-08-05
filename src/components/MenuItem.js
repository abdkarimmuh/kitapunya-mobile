import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from '@app/assets/colors'

export default class MenuItem extends Component {
    render() {
        return (
            <View style={styles.menuItem}>
                <FontAwesome name={this.props.iconItem} size={32} color={Color.primaryColor} />
                <Text style={styles.textMenuItem}>{this.props.textItem}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    textMenuItem: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '300',
        color: 'black'
    },
});