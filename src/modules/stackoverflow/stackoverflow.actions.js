import types from "./stackoverflow.types";

export const loadQuestionsAction = questions => {
  return {
    type: types.LOAD_QUESTIONS,
    payload: {
      questions,
    },
  };
};
