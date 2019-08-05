import React, { Component } from "react";
import { View, TouchableOpacity } from 'react-native';
import { MENUITEM } from '@app/assets/strings';
import { MenuItem } from '@app/components';
import Styles from '@app/assets/styles';
import NavigationServices from '@app/services/NavigationServices';

export default class HomeMenu extends Component {

    pressCategory(title) {
        NavigationServices.navigate('ListDonation', { title: title });
    }

    render() {
        return (
            <View style={Styles.menuContainer}>
                {
                    MENUITEM.map((item) => (
                        <TouchableOpacity
                            key={item.title}
                            onPress={() => {
                                this.pressCategory(item.title);
                            }}>
                            <View
                                style={Styles.menuItemContainer}>
                                <MenuItem iconItem={item.icon} textItem={item.title} />
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}