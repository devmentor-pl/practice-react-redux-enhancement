import React from "react";

import SearchUserPanel from "./containers/SearchUserPanelContainer";
import ReposList from "./containers/ReposListContainer";

function Github() {
  return (
    <>
      <h3>GitHub Repos</h3>
      <SearchUserPanel />
      <ReposList />
    </>
  );
}

export default Github;
