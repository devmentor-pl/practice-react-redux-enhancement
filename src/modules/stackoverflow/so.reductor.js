import types from './so.types';

const initialState = {
    request: {
        userQuery: '',
        order: 'desc',
        sortMethod: 'relevance',
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
        case types.TOGGLE:
            console.log('toggle', payload);
            return {
                ...state,
                request: {
                    ...state.request,
                    [payload]: !state.request[payload],
                },
            };
        case types.SET_RESPONSE:
            return {
                ...state,
                response: payload,
            };
        default:
            return state;
        // throw new Error(`Unhandled type error2 ${type}`);
    }
};

export default reducer;
