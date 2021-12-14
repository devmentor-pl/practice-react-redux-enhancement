import GitHubAPI from "./github.api";
import types from './github.types';

const api = new GitHubAPI();

const getRepos = repos => {
    return {
        type: types.GET_REPOS,
        payload: {
            value: repos
        }
    };
};

const handleErrors = err => {
    return {
        type: types.HANDLE_ERRORS,
        payload: {
            value: err,
            type: 'error'
        }
    }
};

const getData = value => (dispatch, getState) => {
    api.getRepos(value)
        .then(resp => {
            dispatch(getRepos(resp));
        })
        .catch(err => {
            dispatch(handleErrors(err));
        })
}

const filterList = data => {
    return {
        type: types.FILTER_LIST,
        payload: {
            value: data
        }
    }
};


export { getRepos, handleErrors, getData, filterList };
