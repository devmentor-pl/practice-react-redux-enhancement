import gitHubAPI from './github.api';
import types from './github.types';

const gitAPI = new gitHubAPI;

export const getUserNameField = (userName) => {
    return{
        type: types.GETUSERNAMEFIELD,
        payload: userName
    }
}

export const getSearchQuery = (searchQuery) => {
    return{
        type: types.GETSEARCHQUERY,
        payload: searchQuery
    }
}

export const fetchingRepo = () => {
    return {
        type: types.FETCHING_DATA
    }
}

export const setUserRepo = (repo) => {
    return {
        type: types.SETUSERREPO,
        payload: repo,
    }
}

export const filteredRepo = (repo) => {
    return {
        type: types.FILTEREDREPO,
        payload: repo,
    }
}


export const getRepo = () => (dispatch, getState) => {
    const {gitHub: {
        userName
    }} = getState()
    dispatch(fetchingRepo());
    gitAPI.getRepos(userName)
        .then((repo) => {
            dispatch(setUserRepo(repo));
        })
}