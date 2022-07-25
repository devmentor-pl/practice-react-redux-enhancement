import types from './github.types'

const initState = {
    repos: [],
    error: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case types.LOAD_REPOS:
            return {
                ...state, error: [], repos: action.payload
            }

        case types.ADD_ERROR:
            return {
                ...state, repos: [], error: [action.payload.error]
            }
        default:
            return state;
    }
}

export default reducer;