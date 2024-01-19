import {
  FETCH_REPOS_START,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from './github.types';

const INITIAL_STATE = {
  repos: [],
  isFetching: false,
  errorMessage: undefined,
};

const githubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REPOS_START:
      return { ...state, isFetching: true };
    case FETCH_REPOS_SUCCESS:
      return { ...state, isFetching: false, repos: action.payload };
    case FETCH_REPOS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default githubReducer;
