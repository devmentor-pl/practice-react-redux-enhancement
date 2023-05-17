import types from "../types/stackoverflow.types";

const initState = {
  similar: [],
  messages: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_SIMILAR:
      return { ...state, similar: action.payload.similar };

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
