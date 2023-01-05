// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import thunk from "redux-thunk";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./modules/stackoverflow/stack.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const root = createRoot(document.querySelector("#root"));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
