import types from "./stackoverflow.types";

const initState = {
  questions: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_QUESTIONS:
      const { questions } = action.payload;

      return {
        ...state,
        questions,
      };
    default:
      return state;
  }
};

export default reducer;
