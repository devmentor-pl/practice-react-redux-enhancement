// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import thunk from "redux-thunk";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const root = createRoot(document.querySelector("#root"));
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
