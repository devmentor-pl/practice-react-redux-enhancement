import types from './github.types';
import GitHubAPI from './github.api';

const api = new GitHubAPI();

export const setUserAction = name => {
    return {
        type: types.SET_USER,
        payload: name,
    };
};

export const setFormError = error => {
    return { type: types.SET_FORM_ERROR, payload: error };
};

export const setKeyToEmptyString = key => {
    return { type: types.SET_KEY_TO_EMPTY_STRING, payload: key };
};

export const setFetchFailure = error => {
    return { type: types.FETCH_REPOS_FAILURE, payload: error };
};

export const setFetchSuccess = repos => {
    return { type: types.FETCH_REPOS_SUCCESS, payload: repos };
};

export const setFetchReposBegin = boolean => {
    return { type: types.FETCH_REPOS_BEGIN, payload: boolean };
};

export const getReposAction = user => (dispatch, getState) => {
    dispatch(setFetchReposBegin());
    return api
        .getRepos(user)
        .then(data => {
            console.log(data);
            dispatch(setFetchSuccess(data));
        })
        .catch(err => {
            console.error(err);
            dispatch(setFetchFailure(err));
        });
};
