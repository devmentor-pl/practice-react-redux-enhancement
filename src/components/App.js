import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/index";

const App = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return (
    <>
      <Task01 />
      <Task02 />
      <Provider store={store}>
        <Task03 />

        <Task04 />

        <Task05 />
      </Provider>
    </>
  );
};

export default App;