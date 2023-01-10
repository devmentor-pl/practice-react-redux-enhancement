import StackOverflowAPI from "./stackoverflow.api";
import types from "./stackoverflow.types";

const api = new StackOverflowAPI();

export const setTopic = (value) => {
  console.log(value);
  return {
    type: types.SET_TOPIC,
    payload: { topic: value },
  };
};

export const getData = (searchedTopic) => (dispatch) => {
  api.getData(searchedTopic).then((data) => dispatch(setData(data)));
};

export const setData = (value) => {
  return {
    type: types.SET_DATA,
    payload: { downloadedData: value },
  };
};

export const setError = (err) => {
  return {
    type: types.SET_ERROR,
    payload: {
      message: err,
      type: "error",
    },
  };
};
