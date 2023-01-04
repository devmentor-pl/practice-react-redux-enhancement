import types from "./github.types";
const initState = {
  repos: [],
  error: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case types.GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
