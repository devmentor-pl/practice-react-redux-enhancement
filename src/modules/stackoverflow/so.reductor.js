import types from './so.types';

const reducer = (state = initState, { type, payload }) => {
    switch (key) {
        case types.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: payload,
            }
        // case types.SET_SEARCH_QUERY:
        //     return {
        //         ...state,
        //         searchQuery: payload,
        //     }
        default:
            return state,
    }
};
