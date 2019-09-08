import React, { Component } from "react";
import { View } from "react-native";

// eslint-disable-next-line
export default ({ style, ...others }) => (
    <View style={[{ padding: 24 }, style]} {...others} />
);
