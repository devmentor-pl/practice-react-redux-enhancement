import types from "./github.types";

export const showRepos = (data) => {
  return {
    type: types.SHOW_REPOS,
    payload: { data: data },
  };
};
