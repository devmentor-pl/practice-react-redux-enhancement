import types from './github.types';
import GitHubAPI from './github.api';

const askAPI = new GitHubAPI();

export const setRepos = reposList => {
    return {
        type: types.SET_REPOS,
        payload: {
            data:reposList,
        }
    }
}

export const loadRepos = userName => (dispatch) => {
    askAPI.getRepos(userName)
    .then(resp=> dispatch(setRepos(resp)))
}


export const filterRepos = filterText => {
    return {
        type: types.FILTER_REPOS,
        payload: {
            text:filterText,
        }
    }
}