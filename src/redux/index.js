import { combineReducers } from "redux"
import temp from "./temp"
import user from "./user"
import maps from "./maps"

export default combineReducers({
    temp: temp.reducer,
    user: user.reducer,
    maps: maps.reducer,
})
