import React, { useState } from "react";

const Stackoverflow = () => {

  React.useEffect(() => {
    console.log('Effect')
    const title = 'react'
    // const sort = 'creation'
    const sort = 'votes'

    const URL = "https://api.stackexchange.com/2.3/questions?order=desc&site=stackoverflow";
    
    // return fetch(`https://api.stackexchange.com/2.3/questions?order=desc&site=stackoverflow&sort=${sort}&title=${title}`)
    return fetch(`${URL}&sort=${sort}&title=${title}`)
      .then((resp) => resp.json())
      .then(data => console.log(data.items))
  }, [])

return (
  <div>
    <h2>Stack</h2>

  </div>
);
};

export default Stackoverflow;