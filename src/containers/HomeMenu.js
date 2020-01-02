import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Styles from "@app/assets/styles";
import NavigationServices from "@app/services/NavigationServices";

import Icon from "@app/assets/images";

const MenuItem = [
    {
        id: 1,
        title: "Semua",
        icon: Icon.icon.gift
    },
    {
        id: 2,
        title: "Bencana Alam",
        icon: Icon.icon.houseDamage
    },
    {
        id: 3,
        title: "Rumah Ibadah",
        icon: Icon.icon.mosque
    },
    {
        id: 4,
        title: "Pendidikan",
        icon: Icon.icon.graduationCap
    },
    {
        id: 5,
        title: "Panti Asuhan",
        icon: Icon.icon.child
    },
    {
        id: 6,
        title: "Personal",
        icon: Icon.icon.user
    },
];

export default class HomeMenu extends Component {

    pressCategory(title, id) {
        NavigationServices.navigate("ListCampaign", { title: title, id: id });
    }

    render() {
        return (
            <View style={Styles.menuContainer}>
                {
                    MenuItem.map((item) => (
                        <View
                            key={item.title}
                            style={Styles.menuItemContainer}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.pressCategory(item.title, item.id);
                                }}>
                                <View style={Styles.menuItem}>
                                    <Image source={item.icon} style={Styles.imageMenuItem} />
                                    <Text style={Styles.textMenuItem}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        )
    }
}