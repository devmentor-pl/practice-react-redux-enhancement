import types from './github.types'
import GitHubAPI from './github.api'

const githubApi = new GitHubAPI()

export const loadRepos = repos => {
    return {
        type: types.LOAD_REPOS,
        payload: repos
    }
}

export const addError = error => {
    return {
        type: types.ADD_ERROR,
        payload: error
    }
}

export const getReposAction = user => (dispatch) => {
    githubApi.getRepos(user)
        .then(resp => dispatch(loadRepos(resp)))
        .catch(err => dispatch(addError(err)))
}