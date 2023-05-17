import types from "../types/github.types";

const initState = {
  repos: [],
  messages: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_REPOS:
      return { ...state, repos: action.payload.repos };

    case types.SET_ERROR:
      const { message, type } = action.payload;

      return {
        ...state,
        messages: [...state.messages, { message: message, type: type }],
      };

    default:
      return state;
  }
};

export default reducer;
