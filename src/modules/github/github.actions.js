import types from "./github.types";

export const getUser = user => {
  return {
    type: types.GET_USER,
    payload: {
       user
    },
  };
};
export const getRepos = user => {
  return {
    type: types.GET_REPOS,
    payload: {
     repos,
    },
  };
};