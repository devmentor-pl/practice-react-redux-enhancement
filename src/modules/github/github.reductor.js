const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: payload,
            };
        case 'SET_QUERY':
            return {
                ...state,
                repoQuery: payload,
            };
        case 'GET_REPOS':
            return {
                ...state,
                hits: payload,
            };
        default:
            return state;
    }
};

export default reducer;
