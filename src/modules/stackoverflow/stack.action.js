import types from "./stack.types";

import StackoverflowAPI from "./stack.api";
const api = new StackoverflowAPI();

export const getData = (data) => {
  return {
    type: types.GET_DATA,
    payload: {
      data: data,
    },
  };
};
export const getError = (error) => {
  return {
    type: types.GET_ERROR,
    payload: error,
  };
};
export const getDataApi = (title) => (dispatch) => {
  api
    .getData(title)
    .then((resp) => dispatch(getData(resp)))
    .catch((err) => dispatch(getError(err)));
};
