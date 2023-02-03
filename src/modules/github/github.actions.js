import types from './github.types'
import GitHubAPI from './github.api'

const api = new GitHubAPI;

export const setUserAction = (userName) => {
    return {
        type: types.SET_USER,
        payload: userName
    }
}
export const setReposAction = (repos) => {
    return {
        type: types.GET_REPOS,
        payload: repos
    }
}

export const setErrorAction = (error) => {
    return {
        type: types.SET_ERROR,
        payload: {
            message: error,
            type: 'error'
        }
    }
}
export const getReposAction = () => {
    return function thunk(dispatch, getState){
        return api.getRepos(getState().github.user)
            .then(resp => {
                dispatch(setReposAction(resp))
            })
            .catch(err =>{
                dispatch(setErrorAction(err))
            })
    }
}
