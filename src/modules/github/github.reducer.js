import types from './github.types'

const initState = {
    user: '',
    repos: [],
    error: ''
}

export const reducer = (state = initState, action) => {
    switch(action.type){
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case types.SET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case types.GET_REPOS:
            return {
                ...state,
                repos: action.payload,
            }
        default:
            return state
    }
}