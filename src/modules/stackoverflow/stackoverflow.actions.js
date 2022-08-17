import types from "./stackoverflow.types";
import StackoverflowAPI from "./stackoverflow.api";

const api = new StackoverflowAPI();

export const loadStacks = (payload) => {
  return {
    type: types.LOAD_STACKS,
    payload: payload.items,
  };
};

export const getStacksAction = (title, sort) => (dispatch) => {
  api
    .getStacks(title, sort)
    .then((resp) => dispatch(loadStacks(resp)))
    .catch((err) => console.log(err));
};
