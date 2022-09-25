import React, { useState } from "react";
import StackAPI from "./stackoverflow.api";
import actions from './stackoverflow.actions'
import { useDispatch } from 'react-redux'

const Stackoverflow = () => {

  const dispatch = useDispatch()

  const getDataStacks = () => dispatch => {
    const api = new StackAPI()
    api.getStacks()
    .then(data => {
      console.log(data.items)
      dispatch(actions.addStacks(data.items))
    })
  }

  const getTest = () => {
    dispatch(getDataStacks())
  }

return (
  <div>
    <h2>Stack</h2>

    <button onClick={getTest}>test get stacks</button>

  </div>
);
};

export default Stackoverflow;