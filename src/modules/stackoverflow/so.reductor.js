import types from './so.types';

const initialState = {
    request: {
        userQuery: '',
        ssomething: '',
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
        case types.SET_RESPONSE:
            return {
                ...state,
                response: payload,
            };
        default:
            return state;
    }
};

export default reducer;
