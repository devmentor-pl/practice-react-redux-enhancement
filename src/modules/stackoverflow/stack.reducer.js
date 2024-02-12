import types from '../stackoverflow/stack.types'

const initialState = {
    posts: [],
}

const stackReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOAD_POSTS_SUCCES:
            return {
                ...state, 
                posts: action.payload
            }
    }
    return state
}

export default stackReducer;