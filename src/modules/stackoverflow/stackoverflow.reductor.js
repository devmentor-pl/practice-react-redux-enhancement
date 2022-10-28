import types from "./stackoverflow.types";

const initState = {
  stacks: [],
};

const reducerStack = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_STACKS:
      return {
        ...state,
        stacks: action.payload,
      };
    default:
      return state;
  }
};

export default reducerStack;
