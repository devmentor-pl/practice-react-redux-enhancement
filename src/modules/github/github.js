import React from "react";
import { Provider } from "react-redux";

import SearchUserPanel from "./containers/SearchUserPanelContainer";
import ReposList from "./containers/ReposListContainer";
import store from "./store";

function Github() {
  return (
    <Provider store={store}>
      <h3>GitHub Repos</h3>
      <SearchUserPanel />
      <ReposList />
    </Provider>
  );
}

export default Github;
