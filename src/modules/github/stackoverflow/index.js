import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './stackoverflow.reductor'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import Stackoverflow from './stackoverflow'

const StackoverflowWithStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

  return (
    <Provider store={store}>
      <Stackoverflow />
    </Provider>
  )
}

export default StackoverflowWithStore