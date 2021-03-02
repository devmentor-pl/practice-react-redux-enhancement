import types from './so.types';

const initialState = {
    searchQuery: '',
    filterQuery: '',
    results: [],
    filteredResults: [],
};

const reducer = (state = initialState, { type, payload }) => {
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
