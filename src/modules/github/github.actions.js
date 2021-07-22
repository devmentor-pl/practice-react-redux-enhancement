import gitHubAPI from './github.api';
const gitAPI = new gitHubAPI;

export const getUserNameField = (userName) => {
    return{
        type: 'userNameField',
        payload: userName
    }
}

export const getSearchQuery = (searchQuery) => {
    return{
        type: 'searchQuery',
        payload: searchQuery
    }
}

export const fetchingRepo = () => {
    return {
        type: 'fetchingRepo'
    }
}

export const setUserRepo = (repo) => {
    return {
        type: 'getUserRepo',
        payload: repo,
    }
}

export const filteredRepo = (repo) => {
    return {
        type: 'filteredRepo',
        payload: repo,
    }
}


export const getRepo = () => (dispatch, getState) => {
    const state = getState();
    gitAPI.getRepos(state.userName)
        .then((repo) => {
            dispatch(fetchingRepo());
            dispatch(setUserRepo(repo));
        })
}