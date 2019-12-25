import { DefaultTheme, DarkTheme } from "react-native-paper";
import Metrics from "./metrics";
import Color from "@app/assets/colors";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Color.primaryColor,
        accent: Color.textColor,
        borderGrey: "#C4C4C4",
        separatorGrey: "#F3F3F3",
        textGrey: "#C1C1C1"
    },
    fonts: {
        ...DefaultTheme.fonts,
        mavenBold: "MavenPro_Bold",
        mavenRegular: "MavenPro_Regular",
        mavenMedium: "MavenPro_Medium",
        robotoRegular: "Roboto_Regular",
        robotoLight: "Roboto_Light",
        regular: "MavenPro_Bold",
        medium: "MavenPro_Medium",
        light: "Roboto_Light",
        thin: "Roboto_Light"
    }
};

const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: Color.primaryColor,
        accent: Color.white,
        borderGrey: "#C4C4C4",
        separatorGrey: "#F3F3F3",
        textGrey: "#C1C1C1",
        surface: "#FFFFFF",
        background: "#5B5B5B"
    },
    fonts: {
        ...DarkTheme.fonts,
        mavenBold: "MavenPro_Bold",
        mavenRegular: "MavenPro_Regular",
        mavenMedium: "MavenPro_Medium",
        robotoRegular: "Roboto_Regular",
        robotoLight: "Roboto_Light",
        regular: "MavenPro_Bold",
        medium: "MavenPro_Medium",
        light: "Roboto_Light",
        thin: "Roboto_Light"
    }
};

export { theme, Metrics, darkTheme };
