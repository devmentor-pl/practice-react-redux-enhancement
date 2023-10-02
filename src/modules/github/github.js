import React from "react";
import { getAllRepos } from "./github.api";
import { useDispatch, useSelector } from "react-redux";
import { filterDataAction } from "./github.actions";

const Github = () => {
  const [userName, setUserName] = React.useState('')
  const [repoName, setRepoName] = React.useState('')

  const dispatch = useDispatch()

  // const filteredRepos = useSelector(state => state.filteredRepos)
  // const repos = useSelector(state => state.repos)
  // const isFiltered = useSelector(state => state.isFiltered)

  const {
    filteredRepos,
    repos,
    isFiltered
  } = useSelector(state => state.github)

  const handleGetRepos = React.useCallback(() => {
    dispatch(getAllRepos(userName))
  }, [dispatch, getAllRepos, userName])

  const handleFilter = React.useCallback(() => {
    dispatch(filterDataAction(repoName))
  }, [dispatch, filterDataAction, repoName])

  return (
    <section>
      <div>
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={handleGetRepos}
        >
          UPLOAD USER DATA
        </button>
      </div>
      <div>
        <label htmlFor="repoName">Repo name:</label>
        <input
          type="text"
          name="repoName"
          id="repoName"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        <button
          onClick={handleFilter}
        >
          FILTER
        </button>
      </div>
      <ul>
        {
          isFiltered ?
            filteredRepos.map(repo => {
              return <li key={repo.id}>{repo.name}</li>
            })
            :
            repos.map(repo => {
              return <li key={repo.id}>{repo.name}</li>
            })
        }
      </ul>
    </section>
  )
}

export default Github