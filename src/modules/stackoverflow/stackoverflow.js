import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuestionTitleAction } from './stackoverflow.actions'
import StackoverflowAPI from './stackoverflow.api'

const Stackoverflow = () => {
  const { questions, questionTitle, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  const API = new StackoverflowAPI()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(API.getQuestions(questionTitle))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Question Title:
          <input
            type="text"
            value={questionTitle}
            onChange={(e) => dispatch(setQuestionTitleAction(e.target.value))}
          />
        </label>
        <button>Search for questions</button>
      </form>
      {questions.length !== 0 ? (
        <ul>
          {questions
            .sort((q1, q2) => q2.reputation - q1.reputation)
            .map((question) => (
              <li>
                {question.title} || {question.reputation} ||{' '}
                {new Date(question.publicationDate * 1000).toLocaleDateString(
                  'en-US'
                )}
              </li>
            ))}
        </ul>
      ) : (
        <p>{error}</p>
      )}
    </div>
  )
}

export default Stackoverflow
