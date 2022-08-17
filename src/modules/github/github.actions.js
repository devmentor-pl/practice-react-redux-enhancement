import types from "./github.types";
import GitHubAPI from "./github.api";

const api = new GitHubAPI();

export const loadReposAction = (payload) => {
  return {
    type: types.LOAD_REPOS,
    payload,
  };
};

export const getReposAction = (user) => (dispatch, getState) => {
  api
    .getRepos(user)
    .then((resp) => dispatch(loadReposAction(resp)))
    .catch((err) => console.log(err));
};
