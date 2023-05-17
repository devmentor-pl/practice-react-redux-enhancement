import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SearchPanel from "../components/SearchPanel";
import { getSimilar } from "../actions/stackoverflow.actions";

function SearchPanelContainer() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSimilar(query));
  };

  const fieldOptions = {
    label: "Szukaj na Stackoverflow:",
    id: "query",
    name: "query",
    placeholder: "Wpisz frazę",
    type: "search",
    value: query,
    onChange: setQuery,
  };

  return <SearchPanel onSubmit={handleSubmit} fieldOptions={fieldOptions} />;
}

export default SearchPanelContainer;
