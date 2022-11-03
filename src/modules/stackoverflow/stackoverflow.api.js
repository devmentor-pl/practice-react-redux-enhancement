import { setErrorAction, setQuestionsAction } from './stackoverflow.actions'

class StackoverflowAPI {
  url = 'https://api.stackexchange.com/2.3/similar?order=desc&sort=creation&site=stackoverflow'

  getQuestions = (title) => (dispatch, getState) => {
    return fetch(`${this.url}&title=${title}`)
      .then(this.handleErrors)
      .then((resp) => resp.json())
      .then((resp) => dispatch(setQuestionsAction(resp.items)))
      .catch((error) => dispatch(setErrorAction(error.message)))
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText)
    }
    return resp
  }
}

export default StackoverflowAPI
