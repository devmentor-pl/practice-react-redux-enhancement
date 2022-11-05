import types from './github.types'

const initState = {
  user: null,
  repos: [],
  phrase: '',
  error: null
}

const reducer = (state = initState, action) => {
  switch(action.type) {

    case types.GET_USER:
      return {
        ...state,
        user: action.payload
      }

    case types.GET_REPOS:
      return {
        ...state,
        repos: action.payload
      }
    
    case types.GET_SEARCHED_PHRASE:
      return {
        ...state,
        phrase: action.payload
      }

    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default reducer
