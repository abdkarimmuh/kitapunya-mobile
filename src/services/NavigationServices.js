import { NavigationActions, StackActions } from "react-navigation";
import { map } from "ramda";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

const goBack = () => _navigator.dispatch(NavigationActions.back());
const dispatch = action => _navigator.dispatch(action);

const navigate = (routeName, params, action) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
            action
        })
    );
}

function resetStackNavigate(stack: string[], index = 0) {
    _navigator.dispatch(
        StackActions.reset({
            index,
            key: null,
            actions: map(s => NavigationActions.navigate({ routeName: s }), stack)
        })
    );
}

export default {
    goBack,
    dispatch,
    navigate,
    resetStackNavigate,
    setTopLevelNavigator
}
