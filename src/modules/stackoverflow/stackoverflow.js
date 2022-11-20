import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import StackoverflowAPI from "./stackoverflow.api";
import { renderStacksAction, setSort } from "./stackoverflow.actions";

const Stackoverflow = () => {
  const { stacks, sort } = useSelector(
    (state) => state.stackoverflow
  )
  console.log(stacks)
  const dispatch = useDispatch()
  const StackoverflowApi = new StackoverflowAPI() 
  const [title, setTitle] = React.useState('')

  const getStacks = (title, sort) => (dispatch) => {
    StackoverflowApi.getStacks(title, sort)
      .then((resp) => dispatch(renderStacksAction(resp)))
      .catch((error) => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getStacks(title, sort))
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
        <select
          name="sort"
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}
        >
          <option value="activity">activity</option>
          <option value="votes">votes</option>
        </select>
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
