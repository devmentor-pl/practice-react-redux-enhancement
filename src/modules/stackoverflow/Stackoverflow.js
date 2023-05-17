import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import SearchPanel from "./containers/SearchPanelContainer";
import ResultsList from "./containers/ResultsListContainer";

function Stackoverflow() {
  return (
    <Provider store={store}>
      <h3>Stackoverflow similar</h3>
      <SearchPanel />
      <ResultsList />
    </Provider>
  );
}

export default Stackoverflow;
