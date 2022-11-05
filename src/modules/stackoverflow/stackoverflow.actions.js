import types from './github.types'

export const getUserAction = (user) => {
  return {
    type: types.GET_USER,
    payload: user
  }
}

export const getReposAction = (repos) => {
  return {
    type: types.GET_REPOS,
    payload: repos
  }
}

export const getSearchedPhraseAction = (phrase) => {
  return {
    type: types.GET_SEARCHED_PHRASE,
    payload: phrase
  }
}

export const setErrorAction = (error) => {
  return {
    type: types.SET_ERROR,
    payload: error
  }
}
