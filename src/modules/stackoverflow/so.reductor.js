import types from './so.types';

const initialState = {
    request: {
        userQuery: '',
        sortMethod: 'desc',
        isAnswered: false,
    },
    response: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_FIELD_VALUE:
            return {
                ...state,
                request: {
                    ...state.request,
                    [payload.name]: payload.value,
                },
            };
        case types.TOGGLE_CHECKBOX:
            console.log('payload', payload);
            return {
                ...state,
                request: {
                    payload,
                    // [payload.name]: !payload.checked,
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
