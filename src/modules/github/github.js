import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserNameField, getRepo, getSearchQuery, filteredRepo } from "./github.actions";

const Github = () => {
  const { userName, repos, requestInProgress, filteredRepositories, searchQuery } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleUserInput = (e) => {
    const { value } = e.target;
    dispatch(getUserNameField(value));
  };

  const handleSearchQuery = (e) => {
    const { value } = e.target;
    dispatch(getSearchQuery(value));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(getRepo());
  };

  const printRepositories = () => {
    if (filteredRepositories.length !== 0) {
        return filteredRepositories.map((item) => <li key={item.id}>{item.name}</li>)
    } else if(filteredRepositories.length === 0 && searchQuery) {
        return <p>No repository found!</p>
    } else if(repos.length !== 0) {
        return repos.map((item) => <li key={item.id}>{item.name}</li>);
    }
  }


  useEffect(() => {
      const filtered = repos.filter((item) => {
        if(item.name.includes(searchQuery)){
            return item;
        }
      })
      dispatch(filteredRepo(filtered))
  }, [searchQuery])
  
  return (
    <section>
      <h3>Search GitHub API</h3>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="userName">User Name: </label>
        <input type="text" id="userName" onChange={handleUserInput} />
        <label htmlFor="repository">Search repos: </label>
        <input type="text" id="repository" onChange={handleSearchQuery} />
        <button type="submit">Search</button>
      </form>
      <h3>Repos:</h3>
      <ul>
        {printRepositories()}
      </ul>
    </section>
  );
};

export default Github;
