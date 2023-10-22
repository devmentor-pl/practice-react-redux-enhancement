import { types } from './'

const initState = { repos: [] }

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_REPOS:
            return {
                ...state,
                repos: action.payload.arr
            }
        default:
            return state
    }
}

export default reducer