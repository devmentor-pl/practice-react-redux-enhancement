import types from './github.types'

// STATE
const initState = {
    test: ['Ala ma kota'],
    repos: [],
    phrase: ''
}

// REDUCER
const reducer = (state = initState, action) => {
    // console.log(action)
    switch(action.type) {
        case types.ADD:
            return {
                ...state,
                test: [...state.test, action.payload.text]
            }
        case types.ADD_REPOS:
            return {
                ...state,
                repos: [...state.repos, action.payload.repo]
            }
        case types.RESET_REPOS:
            return {
                ...state,
                repos: []
            }
        case types.ADD_PHRASE:
            return {
                ...state,
                phrase: action.payload.phrase

            }
        default:
            return state
    }
}

export default reducer
