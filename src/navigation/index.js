import { createStackNavigator, createAppContainer } from "react-navigation";

import { SplashScreen } from "@app/screens";
import AuthStack from "./AuthStack";
import MainBottomTab from "./MainBottomTab";

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
            screen: MainBottomTab,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: "Splash"
    }
);

export default createAppContainer(InitialStack);
