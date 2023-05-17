import React from "react";

import SearchPanel from "./containers/SearchPanelContainer";
import ResultsList from "./containers/ResultsListContainer";

function Stackoverflow() {
  return (
    <>
      <h3>Stackoverflow similar</h3>
      <SearchPanel />
      <ResultsList />
    </>
  );
}

export default Stackoverflow;
