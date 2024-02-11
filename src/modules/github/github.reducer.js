import types from './github.types'

const initialState = {
    repos: [],
}

const ghReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOAD_REPOS_SUCCES:
        return {
            ...state,
            repos: action.payload
        }
        case types.LOAD_REPOS_WITH_SIGN_SUCCES:
            return {
                ...state,
                repos: action.payload
            }
    }
    return state
}

export default ghReducer;