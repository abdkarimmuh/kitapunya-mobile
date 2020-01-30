import { SET_MAPS, RESET_MAPS } from "./types"

const setData = ({ data }) => ({
    type: SET_MAPS,
    payload: data
})


const resetData = () => ({
    type: RESET_MAPS
})

export default {
    setData, resetData
}
