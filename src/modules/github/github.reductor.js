import types from './github.types';

const INITIAL_STATE = {
    repos: [],
    errors: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.GET_REPOS: 
            return { ...state, repos: action.payload.value, errors: [] };
        case types.FILTER_LIST:
            const filteredList = state.repos.filter(el => el.name.toLowerCase().includes(action.payload.value.toLowerCase()));
            return { ...state, filteredRepos: [...filteredList] };
        case types.HANDLE_ERRORS:
            const { value, type } = action.payload;
            return { ...state, errors: [ ...state.errors, { value: value, type: type }]}
        default: return state;
    };
};

export default reducer;