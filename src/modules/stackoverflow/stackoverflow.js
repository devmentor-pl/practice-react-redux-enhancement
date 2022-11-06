import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import StackoverflowAPI from "./stackoverflow.api";
import { renderStacksAction } from "./stackoverflow.actions";

const Stackoverflow = () => {
  const { stacks } = useSelector(
    (state) => state.stackoverflow
  )
  console.log(stacks)
  const dispatch = useDispatch()
  const StackoverflowApi = new StackoverflowAPI() 
  const [title, setTitle] = React.useState('')

  const getStacks = (title) => (dispatch) => {
    StackoverflowApi.getStacks(title)
      .then((resp) => dispatch(renderStacksAction(resp)))
      .catch((error) => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getStacks(title))
    setTitle('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>FIND</button>
      </form>
      {stacks.length > 0 ? (
        <ul>
          {stacks.map((data) => {
            return (
              <li key={data.question_id}>
                <a href={data.link}>
                  {data.title}
                </a>
              </li>
            ) 
          })}
        </ul> 
      ) : stacks.length > 0 && title !== '' ? (
        <p>Found no results for "{title}"</p>
      ) : null }      
    </>
  )
}

export default Stackoverflow
