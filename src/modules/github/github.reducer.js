import * as types from './github.types';

const initState = {
    login: '',
    phrase: '',
    repos: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_LOGIN:
            const { login } = action.payload;
            return { ...state, login: login };
        case types.SET_PHRASE:
            const { phrase } = action.payload;
            return { ...state, phrase: phrase };
        case types.SET_REPOS:
            const { repos } = action.payload;
            return { ...state, repos: repos };
        default:
            return state;
    }
}

export default reducer