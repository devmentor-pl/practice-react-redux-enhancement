import types from './github.types';

const initialState = {
    user: '',
    formError: '',
    fetchError: '',
    repos: [],
    fetchLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case types.SET_FORM_ERROR:
            return {
                ...state,
                formError: action.payload,
            };

        case types.SET_KEY_TO_EMPTY_STRING:
            return {
                ...state,
                [action.payload]: '',
            };
        case types.FETCH_REPOS_BEGIN:
            return {
                ...state,
                fetchLoading: true,
                fetchError: null,
            };
        case types.FETCH_REPOS_SUCCESS:
            return {
                ...state,
                fetchLoading: false,
                repos: action.payload,
            };
        case types.FETCH_REPOS_FAILURE:
            return {
                ...state,
                fetchLoading: false,
                error: action.payload,
                repos: [],
            };
        default:
            return state;
    }
};

export default reducer;
