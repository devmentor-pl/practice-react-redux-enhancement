import types from "./stack.types";

import StackoverflowAPI from "./stack.api";
const api = new StackoverflowAPI();

export const setData = (data) => {
  return {
    type: types.GET_DATA,
    payload: {
      data: data,
    },
  };
};
export const setError = (error) => {
  return {
    type: types.GET_ERROR,
    payload: error,
  };
};
export const getDataApi = (title, sort) => (dispatch) => {
  api
    .getData(title, sort)
    .then((resp) => dispatch(setData(resp)))
    .catch((err) => dispatch(setError(err)));
};
