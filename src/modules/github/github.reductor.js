import types from './github.types'

const initialState = {
  user: '',
  repositoryPhrase: '',
  repositories: [],
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload }
    case types.SET_REPOSITORY_PHRASE:
      return { ...state, repositoryPhrase: action.payload }
    case types.SET_REPOSITORIES:
      return { ...state, repositories: action.payload }
    case types.SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default reducer
