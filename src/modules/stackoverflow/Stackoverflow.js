import React, { useState } from "react";
import StackAPI from "./stackoverflow.api";
import actions from './stackoverflow.actions'
import { useDispatch, useSelector } from 'react-redux'

const styles = {
  form: { padding: '10px', border: '1px dotted gray' },
  wrapDiv: { color: 'gray', paddingBottom: '10px' },
  label: { width: '100px', display: 'inline-block' },
  input: { padding: '5px' }
}

const Stackoverflow = () => {
  const [title, setTitle] = useState('')
  const [sort, setSort] = useState('creation')

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

  const onSelect = e => {
    const sort = e.target.value
    console.log('Select', sort)
    setSort(sort)
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log('onSubmit')
    // const title = 'Ola'
    // const sort = 'creation'
    dispatch(getDataStacks(sort, title))
  }

  return (
    <div>
      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.wrapDiv}>
          <label htmlFor="title" style={styles.label}>
            title for seach
          </label>
          <input 
            type="text" 
            id='title' 
            style={styles.input}
            onChange={inputTitle}
            placeholder='enter title'
          />
        </div>
        <div style={styles.wrapDiv}>
          <label htmlFor="sort" style={styles.label}>
           select sort
          </label>
          <select id="sort" onChange={onSelect}>
            <option value="creation">Data</option>
            <option value="votes">Wyniki</option>
          </select>
        </div>
        <div style={styles.wrapDiv}>
          <label style={styles.label} />
          <button type='submit'>Pobierz stacks</button>
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