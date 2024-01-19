import {
  FETCH_STACK_START,
  FETCH_STACK_SUCCESS,
  FETCH_STACK_FAILURE,
} from './stack.types';

export const fetchStackStart = () => ({
  type: FETCH_STACK_START,
});

export const fetchStackSuccess = (data) => ({
  type: FETCH_STACK_SUCCESS,
  payload: data,
});

export const fetchStackFailure = (errorMessage) => ({
  type: FETCH_STACK_FAILURE,
  payload: errorMessage,
});
