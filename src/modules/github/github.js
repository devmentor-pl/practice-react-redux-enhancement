import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAction, setRepositoryPhraseAction } from './github.actions'
import GitHubAPI from './github.api'

const GitHub = () => {
  const { user, repositoryPhrase, repositories, error } = useSelector(
    (state) => state.github
  )
  const dispatch = useDispatch()
  const GitHubAPP = new GitHubAPI()

  return (
    <div>
      <label>
        GitHub username:
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => dispatch(setUserAction(e.target.value))}
        />
      </label>
      <label>
        Repository name phrase
        <input
          type="text"
          name="repositoryPhrase"
          value={repositoryPhrase}
          onChange={(e) => dispatch(setRepositoryPhraseAction(e.target.value))}
        />
      </label>
      <button onClick={() => dispatch(GitHubAPP.getRepos(user))}>
        Get repositories
      </button>
      {repositories.length !== 0 ? (
        <ul>
          {repositories
            .filter((repository) => repository.includes(repositoryPhrase))
            .map((repository) => (
              <li key={repository}>{repository}</li>
            ))}
        </ul>
      ) : (
        <p>{error}</p>
      )}
    </div>
  )
}

export default GitHub
