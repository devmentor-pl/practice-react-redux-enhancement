import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import GitHubAPI from "./github.api";
import { renderReposAction } from './github.actions';

const GitHub = () => {
  const { repos } = useSelector(
    (state) => state.github
  )
  const dispatch = useDispatch()
  const GitHubApi = new GitHubAPI() 
  const [userName, setUserName] = React.useState('')
  const [phrase, setPhrase] = React.useState('')

  const getAllRepos = (user) => (dispatch) => {
    GitHubApi.getRepos(user)
      .then((resp) => dispatch(renderReposAction(resp)))
      .catch((error) => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getAllRepos(userName))
  }

  const filterRepos = (repos) => {
    return repos.name.toLowerCase().includes(phrase.toLowerCase())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>username: </label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>FIND</button>
      </form>
      {repos.length > 0 ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <label>find repository by phrase: </label>
          <input
            type="text"
            name="phrase"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          <button>FIND</button>
        </form>
      ) : null}
      {repos.length > 0 ? (
        <ul>
          {repos
            .filter((repos) => filterRepos(repos))
            .map((repo) => {
              return <li key={repo.id}>{repo.name}</li>
            })  
          }
        </ul> 
      ) : repos.length > 0 && userName !== '' ? (
        <p>Repositories not found for {userName}</p>
      ) : null }      
    </>
  )
}

export default GitHub
