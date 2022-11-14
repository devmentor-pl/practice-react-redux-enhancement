import * as types from "./stackoverflow.types"
import API from "./stackoverflow.api.js "

export const getPosts = (phrase, sort) => dispatch => {
  const api = new API()
  api.getPosts(phrase, sort).then(data => dispatch(setPosts(data.items)))
}

export const setPosts = posts => {
  return {
    type: types.SET_POSTS,
    payload: {
      posts,
    },
  }
}

export const setPhrase = phrase => {
  return {
    type: types.SET_PHRASE,
    payload: {
      phrase,
    },
  }
}

export const setSort = sort => {
  return {
    type: types.SET_SORT,
    payload: {
      sort,
    },
  }
}
