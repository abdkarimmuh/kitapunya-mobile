import { createStackNavigator, createAppContainer } from "react-navigation";

import { SplashScreen } from "@app/screens";
import AuthStack from "./AuthStack";
import MainBottom from "./MainBottom";
import CampaignStack from "./CampaignStack";
import ProfileStack from "./ProfileStack";
import HistoryStack from "./HistoryStack";
import DonationStack from "./DonationStack";

const InitialStack = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        },
        Auth: {
            screen: AuthStack,
            navigationOptions: {
                header: null
            }
        },
        Main: {
            screen: MainBottom,
            navigationOptions: {
                header: null
            }
        },
        ...CampaignStack,
        ...ProfileStack,
        ...HistoryStack,
        ...DonationStack
    },
    {
        initialRouteName: "Splash"
    }
);

export default createAppContainer(InitialStack);
