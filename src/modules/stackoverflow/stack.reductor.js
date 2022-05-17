import types from './stack.types';

const initState = {
    topics: [],
}

const stackReducer = (state=initState,action) => {
    switch(action.type){
        case types.SET_TOPICS:
            return {
                ...state,
                topics:action.payload.topics
            }
        case types.SORT_DESC:
            const sortDesc = state.topics.map(item => item).sort((a,b)=> (b.owner.reputation)-(a.owner.reputation))
            return {
                ...state,
                topics:sortDesc

            }
        case types.SORT_ASC:
            const sortAsc = state.topics.map(item => item).sort((a,b)=> (a.owner.reputation)-(b.owner.reputation))
            return {
                ...state,
                topics:sortAsc

            }
        default:
            return state;
    }
}

export default stackReducer;