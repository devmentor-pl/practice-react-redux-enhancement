import types from "./stackoverflow.types";

const initState = {
  stacks: [],
};

const stacksReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_STACKS:
      return { ...state, stacks: [...action.payload] };
    default:
      return state;
  }
};

export default stacksReducer;
