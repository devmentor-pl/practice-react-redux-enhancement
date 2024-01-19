import {
  FETCH_STACK_START,
  FETCH_STACK_SUCCESS,
  FETCH_STACK_FAILURE,
} from './stack.types';

const INITIAL_STATE = {
  questions: [],
  isFetching: false,
  errorMessage: undefined,
};

const stackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STACK_START:
      return { ...state, isFetching: true };

    case FETCH_STACK_SUCCESS:
      return { ...state, isFetching: false, questions: action.payload };

    case FETCH_STACK_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default stackReducer;
