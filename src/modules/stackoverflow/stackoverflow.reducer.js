import types from './stackoverflow.types'

const initState = {
    threads: [],
    title: ''
}

export const stackoverflowReducer = (state = initState, action) => {
    switch(action.type){
        case types.SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case types.SET_THREADS:
            return {
                ...state,
                threads: action.payload
            }
        default:
            return state
    }
}