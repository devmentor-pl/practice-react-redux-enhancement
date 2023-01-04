import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReposActionApi } from "./github.actions";

const Github = () => {
  const init = { username: "" };
  const [state, setState] = useState(init);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };
  const repos = useSelector((props) => props.repos);
  const error = useSelector((props) => props.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getReposActionApi(state.username));
    setState({ ...state, username: "" });
  };
  const filterRepos = (repos) => {
    console.log(searchTerm);
    return (
      <div>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Szukaj..."
        />
        {repos
          .filter((val) => {
            if (searchTerm == "") {
              return val.name;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val.name;
            }
          })
          .map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
      </div>
    );
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input name="username" value={state.username} onChange={handleChange} />
        <input type="submit" value="Zatwierdź" />
      </form>
      <ul>{repos.length > 0 && filterRepos(repos)}</ul>
      {error.length > 0 && <p>Nieprawidłowa nazwa użytkownika</p>}
    </section>
  );
};

export default Github;
