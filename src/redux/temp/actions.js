import { SET_TEMP, REMOVE_TEMP, RESET_TEMP } from "./types"

const setData = (data: any) => ({
    type: SET_TEMP,
    payload: data
})

const removeData = (key: string) => ({
    type: REMOVE_TEMP,
    payload: key
})

const resetData = () => ({
    type: RESET_TEMP
})

export default {
    setData,
    removeData,
    resetData
}
