import React from "react";
import GitHubAPI from "./github.api";
import { useDispatch, useSelector } from "react-redux";
import { showRepos } from "./github.actions";

export const Github = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.github);
  const dataFromApi = new GitHubAPI();
  const [userName, setUserName] = React.useState("");
  const [phrase, setPhrase] = React.useState("");

  const getAllRepos = (user) => (dispatch) => {
    dataFromApi
      .getRepos(user)
      .then((resp) => dispatch(showRepos(resp)))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllRepos(userName));
  };

  const filterRepos = (repos) => {
    return repos.name.includes(phrase);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          name={userName}
          value={userName}
          placeholder={"User NAME"}
        />
        <button>FIND</button>
      </form>
      {data.length > 0 ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder={"Find PHRASE"}
          />
        </form>
      ) : null}
      <ol>
        {data
          .filter((repos) => filterRepos(repos))
          .map((repo) => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
      </ol>
    </>
  );
};
