import types from "./github.types";

import GitHubAPI from "./github.api";

const api = new GitHubAPI();

export const getReposAction = (repos) => {
  return {
    type: types.GET_REPOS,
    payload: repos,
  };
};
export const getErrorAction = (error) => {
  return {
    type: types.GET_ERROR,
    payload: error,
  };
};

export const getReposActionApi = (user) => (dispatch) => {
  api
    .getRepos(user)
    .then((resp) => dispatch(getReposAction(resp)))
    .catch((err) => dispatch(getErrorAction(err)));
};
