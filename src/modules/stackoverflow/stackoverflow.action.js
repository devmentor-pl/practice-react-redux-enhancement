import { getStack } from './stackoverflow.api';
import types from './stackoverflow.types';

export const loadStack = (payload) => {
  return {
    type: types.LOAD_STACK,
    payload: payload.items,
  };
};

export const setError = (err) => {
  return {
    type: types.SET_ERROR,
    payload: err,
  };
};

export const getStackAction = (title, sort) => (dispatch, getState) => {
  getStack(title, sort)
    .then((resp) => dispatch(loadStack(resp)))
    .catch((err) => dispatch(setError(err)));
};

export const getStackByVotesAction = (title) => (dispatch, useState) => {};
