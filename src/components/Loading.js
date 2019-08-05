import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Color from "@app/assets/colors";

const Loading = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={Color.primaryColor} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default Loading;
