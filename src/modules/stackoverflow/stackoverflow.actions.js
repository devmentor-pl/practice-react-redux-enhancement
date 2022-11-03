import types from './stackoverflow.types'

const setQuestionsAction = (questions) => {
  return {
    type: types.SET_QUESTIONS,
    payload: questions.map((question) => {
      return {
        title: question.title,
        reputation: question.owner && question.owner.reputation,
        publicationDate: question.creation_date,
      }
    }),
  }
}

const setQuestionTitleAction = (title) => {
  return {
    type: types.SET_QUESTION_TITLE,
    payload: title,
  }
}

const setErrorAction = (error) => {
  return {
    type: types.SET_ERROR,
    payload: error,
  }
}

export { setQuestionsAction, setQuestionTitleAction, setErrorAction }
