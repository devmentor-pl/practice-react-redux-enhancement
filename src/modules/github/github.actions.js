import githubTypes from './github.types';

export const setReposAction = repos => {
	return {
		type: githubTypes.ADD_REPO_STATE,
		payload: {
			repos: repos,
		},
	};
};

export const setErrorAction = err => {
	return {
		type: githubTypes.ADD_ERROR_API,
		payload: {
			error: err,
		},
	};
};