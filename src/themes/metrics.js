import { Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const HightCarousel = DEVICE_WIDTH / 2;
const ItemDonation = DEVICE_WIDTH / 4;

export default {
    DEVICE_WIDTH,
    DEVICE_HEIGHT,
    HightCarousel,
    ItemDonation
};
