import types from './stackoverflow.types'

// STATE
const initState = {
    stacks: []
}

// REDUCER
const reducerStack = (state = initState, action) => {
    // console.log(action)
    switch(action.type) {
        case types.ADD_STACKS:
            return {
                ...state,
                stacks: action.payload.stacks
            }
        default: 
            return state
    }
}

export default reducerStack