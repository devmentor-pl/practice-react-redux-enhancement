import * as types from './stackoverflow.types'
import StackoverflowApi from './stackoverflow.api';

export const getPostsAction = (phrase, sort) => (dispatch) => {
  const api = new StackoverflowApi
  api.getPosts(phrase, sort).then(data => dispatch(setPostsAction(data.items)))
}

export const setPostsAction = posts => {
  return {
    type: types.SET_POSTS,
    payload: {
      posts
    }
  }
}

export const setPhraseAction = phrase => {
  return {
    type: types.SET_PHRASE,
    payload: {
      phrase
    }
  }
}

export const setSortAction = sort => {
  return {
    type: types.SET_SORT,
    payload: {
      sort
    }
  }
}
