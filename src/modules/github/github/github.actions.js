import GitHubAPI from "./github.api";
import types from "./github.types";

const api = new GitHubAPI();

export const setUserName = (value) => {
  console.log(value);
  return {
    type: types.SET_NAME,
    payload: { name: value },
  };
};

export const setRepoName = (value) => {
  return {
    type: types.SET_REPONAME,
    payload: { repoName: value },
  };
};

export const getRespo = (ghLogin) => (dispatch) => {
  api.getRepos(ghLogin).then((data) => dispatch(setRepos(data)));
};

export const setRepos = (value) => {
  return {
    type: types.SET_REPOS,
    payload: { repos: value },
  };
};

export const setError = (err) => {
  return {
    type: types.SET_ERROR,
    payload: {
      message: err,
      type: "error",
    },
  };
};
