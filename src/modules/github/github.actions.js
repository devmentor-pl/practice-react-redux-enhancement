import types from "./github.types";
import {GitHubAPI} from './github.api'

const api = new GitHubAPI();

export const loadDataAction = (userValue) => (dispatch, getState) => {

	api.getRepos(userValue).then((resp) => {
		const reposNames = resp.map((repo) => repo.name);
		dispatch(getReposAction(reposNames));
	});
  
  }

export const getUserAction = userValue => {
  return {
    type: types.GET_USER,
    payload: {
      userValue,
    },
  };
};

export const getReposAction = repos => {
  return {
    type: types.GET_REPOS,
    payload: {
     repos,
    },
  };
};