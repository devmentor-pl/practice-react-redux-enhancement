import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReposAction } from "./github.actions";

const Github = () => {
  const dispatch = useDispatch();

  const [currentUserData, setCurrentUserData] = useState({
    user: "",
    filter: "",
  });
  const [currentUserName, setCurrentUserName] = useState("");

  const { user, filter } = currentUserData;
  const repos = useSelector((props) => props.repos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getReposAction(user));
    setCurrentUserName(user);
    setCurrentUserData({ ...currentUserData, user: "" });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentUserData({ ...currentUserData, [e.target.name]: e.target.value });
  };

  const filterRepos = (items) => {
    return items.name.toLowerCase().includes(filter.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="user"
          value={user}
          placeholder="Nazwa użytkownika"
        />
        <input type="submit" value="Szukaj" />
        {repos.repos.length > 0 ? (
          <input
            onChange={handleChange}
            name="filter"
            value={filter}
            placeholder="Filtruj"
          />
        ) : null}
      </form>
      {repos.repos.length > 0 ? (
        <>
          <h3>Repozytoria użytkownika {currentUserName}:</h3>
          <ul>
            {repos.repos
              .filter((item) => filterRepos(item))
              .map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
          </ul>
        </>
      ) : repos.repos.length > 0 && user !== "" ? (
        <p>Nie znaleziono repozytoriów użytkownika {currentUserName}</p>
      ) : null}
    </>
  );
};

export default Github;
