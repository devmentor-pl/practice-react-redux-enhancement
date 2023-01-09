import types from "./github.types";

import GitHubAPI from "./github.api";

const api = new GitHubAPI();

export const setReposAction = (repos) => {
  return {
    type: types.GET_REPOS,
    payload: repos,
  };
};
export const setErrorAction = (error) => {
  return {
    type: types.GET_ERROR,
    payload: error,
  };
};

export const getReposActionApi = (user) => (dispatch) => {
  api
    .getRepos(user)
    .then((resp) => dispatch(setReposAction(resp)))
    .catch((err) => dispatch(setErrorAction(err)));
};
