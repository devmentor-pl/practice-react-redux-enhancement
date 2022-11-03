import GitHub from './github'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './github.reductor'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const GitHubAll = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
  
  return (
    <Provider store={store}>
      <GitHub></GitHub>
    </Provider>
  )
}

export default GitHubAll
