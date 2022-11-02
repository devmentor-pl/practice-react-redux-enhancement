import types from '../stackoverflow/stack.types'
const initState = {
    stacks:[],
    err:[]
}

const stackReducer = ((state= initState, action)=>{
    switch (action.type) {
        case types.LOAD_STACK:
            return {...state, stacks:[...action.payload], err:[]}
        case types.SET_ERROR:
            return {...state, stacks:[], err:[action.payload]}
        default:
            return state;
    }
})

export default stackReducer;