import types from './github.types';
import GithubAPI from './github.api';

const setFieldValue = (name, value) => {
    return {
        type: types.SET_FIELD_VALUE,
        payload: { name, value },
    };
};

const setFilteredRepos = () => (dispatch, getState) => {
    const { repoQuery, hits } = getState();
    const filteredRepos = Object.values(hits).filter((name) =>
        name.includes(repoQuery)
    );
    dispatch({
        type: types.SET_FILTERED_REPOS,
        payload: filteredRepos,
    });
};

const setRepos = (reposList) => {
    return {
        type: types.SET_REPOS,
        payload: reposList,
    };
};

const getRepos = () => (dispatch, getState) => {
    const { username } = getState();
    const api = new GithubAPI();

    api.getRepos(username).then((repositories) => {
        const reposList = repositories.map((repo) => repo.name);
        dispatch(setRepos(reposList));
    });
};

export { setFieldValue, setFilteredRepos, getRepos };
