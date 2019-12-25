import { combineReducers } from "redux"
import temp from "./temp"
import user from "./user"

export default combineReducers({
    temp: temp.reducer,
    user: user.reducer,
})
