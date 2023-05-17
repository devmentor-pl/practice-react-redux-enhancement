import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SearchUserPanel from "../components/SearchUserPanel";
import { getRepos } from "../actions/github.actions";

function SearchUserPanelContainer() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRepos(userName));
  };

  const fieldOptions = {
    label: "Nazwa użytkownika:",
    id: "userName",
    name: "userName",
    placeholder: "Wpisz nazwę użytkownika",
    type: "text",
    value: userName,
    onChange: setUserName,
  };

  return (
    <SearchUserPanel onSubmit={handleSubmit} fieldOptions={fieldOptions} />
  );
}

export default SearchUserPanelContainer;
