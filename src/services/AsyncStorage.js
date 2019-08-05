import React, { Component } from "react";
import { AsyncStorage } from "react-native";

const Action = () => {
    const StoreData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    const FetchData = async key => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    return {
        StoreData,
        FetchData
    };
};

export default {
    Action
};
