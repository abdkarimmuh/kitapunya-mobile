import { SET_MAPS, RESET_MAPS } from "./types"

type State = {
    long: string,
    lat: string
}

const initialState: State = {
    long: null,
    lat: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MAPS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case RESET_MAPS: {
            return initialState
        }
        default: {
            return state
        }
    }
}
