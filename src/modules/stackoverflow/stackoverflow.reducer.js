import * as types from "./stackoverflow.types"

const initState = {
  sort: "",
  phrase: "",
  posts: [],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_SORT:
      const { sort } = action.payload
      return { ...state, sort }
    case types.SET_PHRASE:
      const { phrase } = action.payload
      return { ...state, phrase }
    case types.SET_POSTS:
      const { posts } = action.payload
      return { ...state, posts }
    default:
      return state
  }
}

export default reducer
