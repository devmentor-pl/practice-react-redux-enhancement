import GitHubAPI from './github.api'
import types from "../github/github.types";

const api = new GitHubAPI();

export const loadReposAction = (userName) => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_REPOS });
    return api.getRepos(userName).then((repos) => {
      dispatch({
        type: types.LOAD_REPOS_SUCCES,
        payload: repos,
      });
      return repos;
    })
    .catch((error) => {
        dispatch({ type: types.LOAD_REPOS_FAILED});
        return api.handleErrors(error)
    })
  };
};
export const loadReposWithSignAction = (sign) => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_REPOS_WITH_SIGN });
    return api.getReposWithSign(sign).then((repos) =>  {
      dispatch({
        type: types.LOAD_REPOS_WITH_SIGN_SUCCES,
        payload: repos,
      });
      return repos;
    })
    .catch((error) => {
      dispatch({ type: types.LOAD_REPOS_FAILED});
      return api.handleErrors(error)
  })
  }
}
