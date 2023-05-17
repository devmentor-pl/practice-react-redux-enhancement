import types from './github.types';
import GitHubAPI from './github.api';

const api = new GitHubAPI();

export const setReposAction = (repos) => {
	return {
		type: types.SET_REPOS,
		payload: repos,
	};
};

export const setErrorAction = (err) => {
	return {
		type: types.SET_ERROR,
		payload: { message: err, type: 'error' },
	};
};

export const getRepos = (user) => (dispatch) => {
	return api
		.getRepos(user)
		.then((resp) => dispatch(setReposAction(resp)))
		.catch((err) => dispatch(setErrorAction(err)));
};
