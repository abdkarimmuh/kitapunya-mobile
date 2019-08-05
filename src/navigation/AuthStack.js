import { createStackNavigator } from "react-navigation";
import {
    RegisterScreen,
    LoginScreen
} from "@app/screens";

export default createStackNavigator(
    {
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: "Login"
    }
);