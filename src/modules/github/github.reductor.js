const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: payload,
            };
        case 'CASE':
            return;
        default:
            return state;
    }
};

export default reducer;
