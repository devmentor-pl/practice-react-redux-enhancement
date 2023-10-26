import { types } from './'
import { GitHubAPI } from './'

export const setLogin = (login) => {
    return {
        type: types.SET_LOGIN,
        payload: { login }
    }
}

export const setPhrase = (phrase) => {
    return {
        type: types.SET_PHRASE,
        payload: { phrase }
    }
}

export const getRepos = (login) => (dispatch, getState) => {
    const api = new GitHubAPI()
    api.getRepos(login)
        .then(data => {
            if (typeof data !== 'undefined') {
                dispatch(setRepos(data))
            } else console.error('Invalid User Name')
        })
}

export const setRepos = arr => {
    return {
        type: types.SET_REPOS,
        payload: { arr }
    }
}








