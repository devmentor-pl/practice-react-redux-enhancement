import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GitHubAPI } from "./github.api";
import { loadReposAction } from "./github.actions";
import { debounce } from "../../utils/debounce";

const GitHub = () => {
  const api = new GitHubAPI();

  const { repos } = useSelector(state => state.github);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");

  const fetchRepos = useCallback(
    debounce(name => {
      dispatch(loadReposAction([]));

      api
        .getRepos(name)
        .then(response => {
          dispatch(loadReposAction(response));
        })
        .catch(err => console.error(err));
    }, 200),
    []
  );

  useEffect(() => {
    if (username.trim().length > 0) {
      fetchRepos(username);
    }
  }, [username]);

  return (
    <div>
      <label htmlFor="username">
        Username
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="search">
        Search
        <input
          id="search"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
      <ul>
        {repos
          .filter(repo =>
            repo.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(repo => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default GitHub;
