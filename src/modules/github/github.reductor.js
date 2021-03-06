const initialState = {
    username: 'u',
    repoQuery: 'r',
    hits: [],
    filteredHits: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_FIELD_VALUE':
            const { name, value } = payload;
            return {
                ...state,
                [name]: value,
            };
        case 'SET_REPOS':
            return {
                ...state,
                hits: payload,
            };
        default:
            return state;
    }
};

export default reducer;
