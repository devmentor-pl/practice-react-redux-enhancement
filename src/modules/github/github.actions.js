import types from './github.types';
import GitHubAPI from './github.api';

const api = new GitHubAPI();

export const getNameField = (name, value) => {
	return {
		type: types.GET_NAME_FIELD,
		payload: { name, value },
	};
};
export const getAllRepos = (repos) => {
	return {
		type: types.GET_ALL_REPOS,
		payload: repos,
	};
};
export const getFilteredRepos = (filteredRepos) => {
	return {
		type: types.GET_FILTERED_REPOS,
		payload: filteredRepos,
	};
};

export const getRepos = () => (dispatch, getState) => {
	const state = getState();
	api.getRepos(state.values.user).then((resp) => {
		const reposNames = resp.map((repo) => repo.name);
		dispatch(getAllRepos(reposNames));
	});
};