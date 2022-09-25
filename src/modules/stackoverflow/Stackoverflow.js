import React, { useState } from "react";
import StackoverflowAPI from "./stackoverflow.api";

const Stackoverflow = () => {

  // React.useEffect(() => {
  //   console.log('Effect')
  //   const title = 'react'
  //   const sort = 'votes'
  //   const URL = "https://api.stackexchange.com/2.3/questions?order=desc&site=stackoverflow";
    
  //   return fetch(`${URL}&sort=${sort}&title=${title}`)
  //     .then((resp) => resp.json())
  //     .then(data => console.log(data.items))
  // }, [])

  const getStacks = () => {
    const api = new StackoverflowAPI()
    api.getStacks()
    .then(data => console.log(data.items))
  }

  const getTest = () => {
    getStacks()
  }

return (
  <div>
    <h2>Stack</h2>

    <button onClick={getTest}>test get stacks</button>

  </div>
);
};

export default Stackoverflow;