import types from "./github.types";

const initState = {
  repos: [],
};

const reposReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
};

export default reposReducer;
