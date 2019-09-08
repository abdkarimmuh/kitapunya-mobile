import { createStackNavigator, createAppContainer } from "react-navigation";

import { SplashScreen } from "@app/screens";
import AuthStack from "./AuthStack";
import MainBottom from "./MainBottom";

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
        }
    },
    {
        initialRouteName: "Main"
    }
);

export default createAppContainer(InitialStack);
