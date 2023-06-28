import types from './github.types';
import GitHubAPI from './github.api';
const api = new GitHubAPI();

export const setReposAction = (repos) => {
	return {
		type: types.SET_REPOS,
		payload: {
			repos: repos,
		},
	};
};

export const setErrorAction = (error) => {
	return {
		type: types.SET_ERROR,
		payload: {
			message: error,
			type: 'error',
		},
	};
};

export const getReposAction = (username) => (dispatch) => {
	return api
		.getRepos(username)
		.then((resp) => dispatch(setReposAction(resp)))
		.catch((err) => dispatch(setErrorAction(err.toString())));
};
