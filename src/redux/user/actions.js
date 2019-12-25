import { SET_USER, SET_TOKEN, RESET_USER } from "./types"

const setData = ({ data }) => ({
    type: SET_USER,
    payload: data
})

const setToken = (data) => ({
    type: SET_TOKEN,
    payload: data
})

const resetUser = () => ({
    type: RESET_USER
})

export default {
    setData, setToken, resetUser
}
