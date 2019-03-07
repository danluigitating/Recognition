import * as types from "../actions"

const initialState = {
    drawerOpen: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case(types.OPEN_NAVIGATION_DRAWER):
            return {
                ...state,
                drawerOpen: true
            }

        case(types.CLOSE_NAVIGATION_DRAWER):
            return {
                ...state,
                drawerOpen: false
            }

        default:
            return state
    }
}