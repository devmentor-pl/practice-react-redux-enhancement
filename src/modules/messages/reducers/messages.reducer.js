import types from "../types/messages.types";

const initState = {
  messages: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_MESSAGE:
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
