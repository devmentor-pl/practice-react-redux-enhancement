// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducer from "./modules/github/github.reducer";
import thunk from "redux-thunk";

import App from "./components/App";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const root = createRoot(document.querySelector("#root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
