// src/modules/github/github.actions.js
import {
  FETCH_REPOS_START,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from './github.types';

export const fetchReposStart = () => ({
  type: FETCH_REPOS_START,
});

export const fetchReposSuccess = (repos) => ({
  type: FETCH_REPOS_SUCCESS,
  payload: repos,
});

export const fetchReposFailure = (errorMessage) => ({
  type: FETCH_REPOS_FAILURE,
  payload: errorMessage,
});
