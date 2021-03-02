import types from './so.types';

const initialState = {
    request: {
        userQuery: '',
        ssomething: 'dada',
    },
    response: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_FIELD_VALUE:
            const { name, value } = payload;
            return {
                ...state,
                request: {
                    ...state.request,
                    [name]: value,
                },
            };
        default:
            return state;
    }
};

export default reducer;
