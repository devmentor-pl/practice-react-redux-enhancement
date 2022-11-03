import types from './stackoverflow.types'

const initialState = {
  questions: [],
  questionTitle: '',
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_QUESTION_TITLE:
      return { ...state, questionTitle: action.payload }
    case types.SET_QUESTIONS:
      return { ...state, questions: [...action.payload] }
    case types.SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default reducer
