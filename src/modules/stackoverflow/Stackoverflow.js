import React, { useState } from "react";
import StackAPI from "./stackoverflow.api";
import actions from './stackoverflow.actions'
import { useDispatch, useSelector } from 'react-redux'

const styles = {
  form: { padding: '10px', border: '1px dotted gray' },
  wrapDiv: { color: 'gray', paddingBottom: '10px' },
  label: { width: '100px', display: 'inline-block' },
  input: { padding: '5px'}
}

const Stackoverflow = () => {
  const [title, setTitle] = useState('')

  // state from Redux
  const stacks = useSelector(state => state.stackReducer.stacks)
  console.log(stacks)
  const listStacks = stacks.map(stack => {
    return (
      <li>{stack.title}</li>
    )
  })

  // methods of Redux
  const dispatch = useDispatch()

  const getDataStacks = (sort, title) => dispatch => {
    const api = new StackAPI()
    api.getStacks(sort, title)
      .then(data => {
        console.log(data.items)
        dispatch(actions.addStacks(data.items))
      })
  }

  const getTest = () => {
    const title = 'Ala'
    const sort = 'votes'
    dispatch(getDataStacks(sort, title))
  }

  // handle form
  const inputTitle = e => {
    setTitle(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log('onSubmit')
  }

  return (
    <div>
      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.wrapDiv}>
          <label htmlFor="title" style={styles.label}>
            title for seach
          </label>
          <input type="text" id='title' style={styles.input} 
            onChange={inputTitle}
            placeholder='enter title'
          />
        </div>
        <div style={styles.wrapDiv}>
          <label style={styles.label} />
          <button>Pobierz stacks</button>
        </div>
      </form>
      <br />
      <div style={styles.wrapDiv}>
        <label style={styles.label} />
        <button onClick={getTest}>test get stacks</button>
      </div>

      <ol>
        {listStacks}
      </ol>

    </div>
  );
};

export default Stackoverflow;