import types from "./github.types";
import { getRepos } from "./github.api";

export const setRepos = (payload) => {
  return {
    type: types.SET_REPOS,
    payload,
  };
};

export const getReposThunk = (userName) => (dispatch, getState) => {
  getRepos(userName).then((resp) => dispatch(setRepos(resp)));
};
