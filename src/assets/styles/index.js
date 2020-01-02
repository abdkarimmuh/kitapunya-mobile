import { StyleSheet } from "react-native";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";

export default StyleSheet.create({

    //SplashScreen
    containerSplash: { flex: 1, justifyContent: "center", backgroundColor: Color.white },
    imageSplash: { width: "50%", height: "50%", resizeMode: "contain", alignSelf: "center" },
    textBottomSplash: { position: "absolute", bottom: 0, alignSelf: "center", marginBottom: 48 },

    //AuthScreen
    containerAuth: { flex: 1, flexDirection: "column", justifyContent: "center", alignContent: "center", padding: 48 },
    textInputAuth: { marginBottom: 16 },
    bottomAuth: { flexDirection: "row", alignSelf: "center", marginTop: 32 },
    textAuthAuthGoTo: { marginLeft: 4, fontWeight: "bold" },
    imageAuth: { width: 250, height: 100, resizeMode: "contain", alignSelf: "center", marginBottom: 32 },

    //MainScreen
    containerHeaderMain: { width: "100%", padding: 24, backgroundColor: Color.white, flexDirection: "row", alignItems: "center", elevation: 4, },
    imageProfileMain: { height: 80, width: 80, borderRadius: 40, borderWidth: 2, borderColor: Color.primaryColor },
    containerTextHeaderMain: { flexDirection: "column", marginLeft: 16 },
    textHeaderMain: { fontWeight: "bold", color: Color.textColor, fontSize: 24 },
    textHeaderNameMain: { color: Color.textColor, fontSize: 16 },
    titleMain: { fontSize: 18, fontWeight: "bold", color: Color.grey },

    //HistoryScreen
    cardHistory: { elevation: 2, padding: 16, marginVertical: 12 },
    containerStatusHistory: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 24 },
    textHeaderHistory: { fontWeight: "bold", color: Color.textColor, fontSize: 18, marginBottom: 6 },
    textDateHistory: { fontStyle: "italic", color: Color.grey, fontSize: 12 },
    textStatusHistory: { color: Color.white, fontSize: 12 },

    //DetaiHistoryScreen
    containerHeaderDetailHistory: { alignItems: "center", marginBottom: 32 },
    containerItemsDetailHistory: { flexDirection: "row", marginTop: 2 },
    textHeaderDetailHistory: { fontSize: 18, fontWeight: "bold", marginBottom: 2 },
    textCampaignerDetailHistory: { fontSize: 16, fontWeight: "bold", marginTop: 2 },
    textDateDetailHistory: { fontSize: 14, fontWeight: "bold", marginTop: 2 },
    textAddressDetailHistory: { fontWeight: "bold", marginTop: 2 },

    //ProfileScreen
    textHeaderTitleProfile: { color: Color.textColor, fontSize: 12, marginTop: 24 },
    textHeaderProfile: { fontWeight: "bold", color: Color.textColor, fontSize: 16, marginTop: 2 },
    containerMenuProfile: { width: "100%", paddingHorizontal: 24, paddingVertical: 12 },
    titleMenuProfile: { fontSize: 16, fontWeight: "500" },
    editImageProfile: { position: "absolute", left: ((Metrics.DEVICE_WIDTH / 2) + 20), top: 80, width: 24, height: 24 },

    //DonasiScreen
    containerBarangDonasi: { padding: 24, backgroundColor: Color.white },
    containerButtonImageDonasi: { width: "45%", backgroundColor: Color.black4A },
    containerButtonImageDonasiMap: { width: "100%", backgroundColor: Color.primaryColor },
    textTitleDonasi: { fontSize: 18, fontWeight: "bold" },
    textInputItemDonasi: { backgroundColor: Color.white, width: "45%", marginLeft: 24 },
    textButtonImageDonasi: { color: Color.white, fontSize: 16 },
    buttonImageDonasi: { elevation: 4, borderRadius: 4, width: "100%", height: 40, alignItems: "center", justifyContent: "center", backgroundColor: Color.textColor, flexDirection: "row" },
    buttonImageDonasiMap: { elevation: 4, borderRadius: 4, width: "100%", height: 40, alignItems: "center", justifyContent: "center", backgroundColor: Color.primaryColor, flexDirection: "row" },

    //DetailDonasiScreen
    bannerDetailCampaign: { width: Metrics.DEVICE_WIDTH, height: Metrics.HightCarousel },
    containerButtonDonasi: { position: "absolute", top: Metrics.HightCarousel - 20, alignSelf: "center" },
    imageButtonDonasi: { marginRight: 8, width: 20, height: 20, resizeMode: "contain" },
    containerOptionBarang: { paddingBottom: 24, paddingRight: 24, paddingRight: 24, marginBottom: 12, backgroundColor: Color.white },
    buttonDonasi: { elevation: 4, borderRadius: 4, width: 110, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: Color.primaryColor, flexDirection: "row" },
    containerTitleDetailCampaign: { marginTop: 32, marginHorizontal: 24, marginBottom: 12 },

    //DonasiBarang
    textTitleBarang: { width: 100, alignItems: "center" },
    textFieldBarang: { fontWeight: "500", fontSize: 16 },
    dividerTableBarang: { width: '100%', height: 1, backgroundColor: Color.dividerColor, marginTop: 12 },

    //DonasiDonatur
    avatarDonatur: { width: 50, height: 50, borderRadius: 25, resizeMode: "cover" },
    containerDonatur: { alignSelf: "center", marginLeft: 16 },
    textNameDonatur: { fontSize: 18, fontWeight: "bold" },
    textItemDonatur: { fontSize: 12, color: Color.grey },

    //Default
    containerDefault: { flex: 1, backgroundColor: Color.backgroudDefault },
    containerRow: { flexDirection: "row", justifyContent: "space-between" },
    containerRowCenter: { flexDirection: "row", alignItems: "center" },
    containerRowFlexEnd: { flexDirection: "row", alignSelf: "flex-end" },
    containerRowSpaceBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    iconDefault: { width: 20, height: 20, resizeMode: "contain" },
    imageProfile: { height: 80, width: 80, borderRadius: 40, elevation: 4, alignSelf: "center" },
    containerButtonForm: { flexDirection: "row", alignSelf: "flex-end", marginTop: 48 },
    buttonFormCancel: { marginRight: 16, backgroundColor: Color.grey },

    //HomeMenu
    menuContainer: { flexWrap: "wrap", justifyContent: "space-between", flexDirection: "row", marginTop: 24, marginBottom: 24 },
    menuItemContainer: { backgroundColor: Color.primaryColor, marginBottom: 24, height: 86, width: "30%", justifyContent: "center", borderRadius: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4 },
    menuItem: { alignSelf: "center", alignItems: "center", justifyContent: "center", },
    textMenuItem: { textAlign: "center", marginTop: 6, color: Color.white },
    imageMenuItem: { width: 50, height: 25, resizeMode: "contain" },

    //DonationItem
    itemDaysProgresiveDay: { flexDirection: "row", alignSelf: "flex-end" },
});