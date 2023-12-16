import * as types from "./stackoverflow.types"

const initState = {
  phrase: '',
  sort: '',
  posts: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case types.SET_PHRASE:
      return {...state, phrase: action.payload.phrase}
    case types.SET_SORT:
      return {...state, sort: action.payload.sort}
    case types.SET_POSTS:
      return {...state, posts: action.payload.posts}
    default:
      return state
  }
}

export default reducer