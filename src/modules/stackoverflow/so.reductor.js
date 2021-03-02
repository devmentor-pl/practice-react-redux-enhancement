import types from './so.types';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case types.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: payload,
            };
        case types.SET_FILTER_QUERY:
            return {
                ...state,
                filterQuery: payload,
            };
        default:
            return state;
    }
};

export default reducer;
