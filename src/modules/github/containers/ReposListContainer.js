import React, { useState } from "react";
import { useSelector } from "react-redux";

import ReposList from "../components/ReposList";

function ReposListContainer() {
  const repos = useSelector((state) => state.repos);
  const [searchBarValue, setSearchBarValue] = useState("");
  const searchBarOptions = {
    name: "repoName",
    id: "repoName",
    placeholder: "Szukaj repozytorium",
    type: "search",
    value: searchBarValue,
    onChange: setSearchBarValue,
  };

  const filteredRepos = searchBarValue
    ? repos.filter((repo) => isNameContainingValue(repo.name, searchBarValue))
    : repos;

  const getReposItems = filteredRepos.map(({ id, name, html_url }) => (
    <li key={id}>
      {name} <a href={html_url}>URL</a>
    </li>
  ));

  return (
    <ReposList reposItems={getReposItems} searchBarOptions={searchBarOptions} />
  );
}

function isNameContainingValue(name, value) {
  return name.toLowerCase().includes(value.toLowerCase());
}

export default ReposListContainer;
