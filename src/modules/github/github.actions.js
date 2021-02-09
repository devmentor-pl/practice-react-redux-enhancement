import types from './github.types';
import GitHubAPI from './github.api';

const ghAPI = new GitHubAPI();

export const setFieldValue = (name, value) => {
	return {
		type: types.SET_FIELD_VALUE,
		payload: { name, value },
	};
};
export const setAllRepos = (repos) => {
	return {
		type: types.SET_ALL_REPOS,
		payload: repos,
	};
};
export const setFilteredRepos = (filteredRepos) => {
	return {
		type: types.SET_FILTERED_REPOS,
		payload: filteredRepos,
	};
};

export const getRepos = () => (dispatch, getState) => {
	const state = getState();
	ghAPI.getRepos(state.values.user).then((resp) => {
		const reposNames = resp.map((repo) => repo.name);
		dispatch(setAllRepos(reposNames));
	});
};
