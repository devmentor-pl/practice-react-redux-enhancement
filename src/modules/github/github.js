import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReposThunk } from "./github.actions";

const Github = () => {
  const dispatch = useDispatch();
  const initState = {
    userName: "",
  };
  const [state, setState] = useState(initState);
  const [query, setQuery] = useState("");
  const { userName } = state;
  const { repos } = useSelector((state) => state);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getReposThunk(userName));
    setState({ ...state, userName: " " });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  return (
    <>
      <form>
        <input
          name="userName"
          value={userName}
          placeholder="Enter user name"
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Find</button>
        <input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          placeholder="Find relevant repos"
        />
      </form>
      <>
        <h3>Repos:</h3>
        <ul>
          {/* czemu mi pokazuje, ze "toLowerCase" to nie funkcja? czy to w ogole dobry trop? */}
          {repos
            .filter((repo) => repo.toLowerCase().includes(query))
            .map((rep) => (
              <li>{rep}</li>
            ))}
        </ul>
      </>
    </>
  );
};

export default Github;
