// const initialState = {
//     username: '',
//     repoQuery: '',
//     hits: [],
//     filteredHits: [],
// };

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: payload,
            };
        case 'SET_FILTER_QUERY':
            return {
                ...state,
                repoQuery: payload,
            };
        case 'SET_REPOS':
            return {
                ...state,
                hits: payload,
            };
        case 'SET_FILTERED_REPOS':
            console.log('SET_FILTERED_REPOS', payload);
            return {
                ...state,
                filteredHits: payload,
            };
        default:
            return state;
    }
};

export default reducer;
