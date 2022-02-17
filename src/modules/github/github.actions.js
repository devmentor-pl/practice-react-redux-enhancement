import types from './github.types'
import {getRepos} from './github.api';


export const loadReposAction = payload => {
    return{
        type: types.LOAD_REPOS,
        payload
    } 
}

export const setError = err =>{
    return {
        type: types.SET_ERROR,
        payload: err
    }
}

export const getReposAction = (user) => (dispatch, getState) => {
    getRepos(user)
        .then(resp=>dispatch(loadReposAction(resp)))
        // .catch(err=>dispatch(setError(err)))
}
