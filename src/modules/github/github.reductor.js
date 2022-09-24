import types from './github.types'

// STATE
const initState = {
    test: ['Ala ma kota'],
    repos: []
}

// REDUCER
const reducer = (state = initState, action) => {
    console.log(action)
    switch(action.type) {
        case types.ADD:
            return {
                ...state,
                test: [...state.test, action.payload.text]
            }
        default:
            return state
    }
}

export default reducer
