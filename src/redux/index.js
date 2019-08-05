import { combineReducers } from "redux";
import temp from "./temp";

export default combineReducers({
    temp: temp.reducer,
});
