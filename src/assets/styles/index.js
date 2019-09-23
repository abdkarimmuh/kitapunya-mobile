import { StyleSheet } from "react-native";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";

export default StyleSheet.create({
    bgImage: {
        flex: 1,
    },
    containerRegister: {
        flex: 1
    },
    login: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
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
    itemDaysProgresiveDay: {
        flexDirection: "row",
        alignSelf: "flex-end"
    },
    itemDonationDetail: {
        flexDirection: "row",
        justifyContent: "space-between"
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
    },
    containerBtnDonasi: {
        position: "absolute",
        top: Metrics.HightCarousel - 24,
        alignSelf: "center",
    },
    btnDonasi: {
        elevation: 4,
        borderRadius: 2,
        width: 140,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.primaryColor,
        flexDirection: "row"
    },
    imgBtnDonation: {
        marginRight: 8,
        width: 18,
        height: 18,
        resizeMode: "contain"
    },
    imgBtn: {
        marginRight: 6,
        width: 16,
        height: 16,
        resizeMode: "contain"
    },
    avatarDonatur: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: "cover"
    },
    containerBarang: {
        padding: 24, 
        backgroundColor: Color.white
    },
    containerOptionBarang: {
        paddingBottom: 24, 
        paddingRight: 24, 
        paddingRight: 24, 
        marginBottom: 12, 
        backgroundColor: Color.white
    },
    containerHistory: {
        marginBottom: 24, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between"
    },
    containerHistoryStatus: {
        flexDirection: "row", 
        alignItems: "center"
    },
    imgStatus: {
        marginRight: 16,
        width: 12,
        height: 12,
        resizeMode: "contain"
    },
    titleStatus: {
        fontSize: 16,
        fontWeight: "bold"
    }
});