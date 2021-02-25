import types from './github.types';
import GithubAPI from './github.api';
import store from '../../store';
const api = new GithubAPI();

const setUserName = (username) => {
    return {
        type: types.SET_USERNAME,
        payload: username,
    };
};

const setRepoQuery = (repositoryName) => {
    return {
        type: types.SET_QUERY,
        payload: repositoryName,
    };
};
const setRepos = (reposList) => {
    return {
        type: types.SET_QUERY,
        payload: reposList,
    };
};

const getRepos = () => {
    const state = store.getState();
    api.getRepos(state.username).then((repositories) => {
        const reposList = repositories.forEach((repo) => repo.name);
        setRepos(reposList);
    });
};

export { setUserName, setRepoQuery, getRepos };
