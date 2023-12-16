import * as types from './github.types';
import GitHubApi from './github.api'


export const getReposAction = userName => (dispatch) => {
  const api = new GitHubApi()
  api.getRepos(userName).then(data => dispatch(setReposAction(data)))
}

export const setReposAction = repos => {
  return {
    type: types.SET_REPOS,
    payload: {
      repos
    }
  }
}

export const setPhraseAction = phrase => {
  return {
    type: types.SET_PHRASE,
    payload: {
      phrase
    }
  }
}

export const setLoginAction = login => {
  return {
    type: types.SET_LOGIN,
    payload: {
      login
    }
  }
}