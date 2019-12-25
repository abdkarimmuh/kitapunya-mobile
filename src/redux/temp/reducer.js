import { SET_TEMP, REMOVE_TEMP, RESET_TEMP } from "./types"

type State = {}

const initialState: State = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMP: {
            return {
                ...state,
                ...action.payload
            }
        }
        case REMOVE_TEMP: {
            return {
                ...state,
                [action.payload]: undefined
            }
        }
        case RESET_TEMP: {
            return initialState
        }
        default: {
            return state
        }
    }
}
