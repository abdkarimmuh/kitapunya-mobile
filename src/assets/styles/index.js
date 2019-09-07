import { StyleSheet } from "react-native";
import Color from "@app/assets/colors";

export default StyleSheet.create({
    bgImage: {
        width: "100%",
        height: "100%",
    },
    login: {
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 24
    },
    imgLogin: {
        width: 150,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center"
    },
    textInput: {
        marginBottom: 16
    },
    menuContainer: {
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 24,
        marginBottom: 24
    },
    menuItemContainer: {
        backgroundColor: Color.primaryColor,
        marginBottom: 24,
        height: 86,
        width: "30%",
        justifyContent: "center",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    menuItem: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    textMenuItem: {
        textAlign: "center",
        marginTop: 6,
        color: Color.white
    },
    imgMenuItem: {
        width: 50,
        height: 25,
        resizeMode: "contain"
    },
    itemDonation: {
        flexDirection: "row",
        alignItems: "center"
    },
    itemDonationDetail: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    itemDescriptionDetail: {
        paddingTop: 8,
        paddingBottom: 8
    },
    headerDescription: {
        color: Color.primaryColor
    },
    textStatusHistory: {
        color: "white",
        alignSelf: "flex-start",
        paddingTop: 2,
        paddingTop: 2,
        paddingRight: 6,
        paddingLeft: 6,
    }
});