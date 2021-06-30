import types from './github.types';

const initialState = {
    username: '',
    repoQuery: '',
    hits: [],
    filteredHits: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_FIELD_VALUE:
            const { name, value } = payload;
            return {
                ...state,
                [name]: value,
            };
        case types.SET_REPOS:
            return {
                ...state,
                hits: payload,
            };
        case types.SET_FILTERED_REPOS:
            return {
                ...state,
                filteredHits: payload,
            };
        default:
            return state;
    }
};

export default reducer;
