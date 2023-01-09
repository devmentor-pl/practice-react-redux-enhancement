export const setUserName = (value) => {
  console.log(value);
  return {
    type: "setName",
    payload: { name: value },
  };
};

export const setRepoName = (value) => {
  return {
    type: "setRepoName",
    payload: { repoName: value },
  };
};

export const setRepos = (value) => {
  console.log(value);
  return {
    type: "setRepos",
    payload: { repos: value },
  };
};

export const setError = (err) => {
  return {
    type: "addError",
    payload: {
      message: err,
      type: "error",
    },
  };
};
