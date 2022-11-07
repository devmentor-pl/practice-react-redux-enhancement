import * as types from './github.types';
import API from './github.api';

export const getRepos = login => (dispatch, getState) => {
    const api = new API();
    api.getRepos(login).then(data => dispatch(setRepos(data)));
}

export const setRepos = repos => {
    return {
        type: types.SET_REPOS,
        payload: {
            repos
        }
    }
}

export const setPhrase = phrase => {
    return {
        type: types.SET_PHRASE,
        payload: {
            phrase
        }
    }
}

export const setLogin = login => {
    return {
        type: types.SET_LOGIN,
        payload: {
            login
        }
    }
}