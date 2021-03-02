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

const setFilterQuery = (query) => {
    return {
        type: types.SET_FILTER_QUERY,
        payload: query,
    };
};

const setFilteredRepos = () => (dispatch, getState) => {
    const { repoQuery, hits } = getState();
    const filteredRepos = Object.values(hits).filter((name) =>
        name.includes(repoQuery)
    );
    console.log('🚀 ~ setFilteredRepos ~ filteredRepos', filteredRepos);

    return {
        type: types.SET_FILTERED_REPOS,
        payload: filteredRepos,
    };
};

const setRepos = (reposList) => {
    return {
        type: types.SET_REPOS,
        payload: reposList,
    };
};

const getRepos = () => (dispatch, getState) => {
    const { username } = getState();

    api.getRepos(username).then((repositories) => {
        const reposList = repositories.map((repo) => repo.name);
        dispatch(setRepos(reposList));
    });
};

export { setUserName, setFilteredRepos, setFilterQuery, getRepos };
