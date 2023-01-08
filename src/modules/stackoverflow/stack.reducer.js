import types from "./stack.types";
const initState = {
  data: {},
  error: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        data: action.payload.data,
        error: [],
      };
    case types.GET_ERROR:
      return {
        ...state,
        data: {},
        error: [action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
