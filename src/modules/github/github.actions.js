import types from "./github.types";

export const loadReposAction = repos => {
  return {
    type: types.LOAD_REPOS,
    payload: {
      repos,
    },
  };
};
