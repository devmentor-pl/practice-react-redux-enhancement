import { setMessage } from "../../messages/actions/messages.actions";
import { getRepos as getReposByProvider } from "../providers/github.api";
import types from "../types/github.types";

export const setRepos = (repos) => ({
  type: types.SET_REPOS,
  payload: { repos: repos },
});

export const getRepos = (userName) => (dispatch, getState) => {
  return getReposByProvider(userName)
    .then((resp) => dispatch(setRepos(resp)))
    .catch((err) => dispatch(setMessage(err)));
};
