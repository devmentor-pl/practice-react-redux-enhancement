import types from './stack.types';

const initState = {
    topics: [],
}

const reducer = (state=initState,action) => {
    switch(action.type){
        case types.SET_TOPICS:
            return {
                ...state,
                topics:action.payload.topics
            }
        default:
            return state;
    }
}

export default reducer;