import types from "../types/stackoverflow.types";

const initState = {
  similar: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_SIMILAR:
      return { ...state, similar: action.payload.similar };

    default:
      return state;
  }
};

export default reducer;
