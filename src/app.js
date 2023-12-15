// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    reducer,
    combineReducers({
      github: ghReducer,
      stackoverflow: soReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
  )

const root = createRoot(document.querySelector('#root'));
root.render(
<Provider store={store}>
<App />
</Provider>

);
