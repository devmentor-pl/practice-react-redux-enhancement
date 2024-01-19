import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReposStart,
  fetchReposSuccess,
  fetchReposFailure,
} from './github.actions';
import GitHubAPI from './github.api';
import { StyledGitHubComponent } from './github.styled';

const GitHub = () => {
  const [userName, setUserName] = useState('');
  const [repoName, setRepoName] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);

  const dispatch = useDispatch();
  const repos = useSelector((state) => state.github.repos || []);
  const isFetching = useSelector((state) => state.github.isFetching || false);
  const errorMessage = useSelector((state) => state.github.errorMessage || '');

  useEffect(() => {
    const filtered = repos.filter((repo) =>
      repo.full_name.toLowerCase().includes(repoName.toLowerCase())
    );
    setFilteredRepos(filtered);
  }, [repoName, repos]);

  const handleUserSearch = async (e) => {
    e.preventDefault();
    setFilteredRepos([]);
    dispatch(fetchReposFailure(''));

    dispatch(fetchReposStart());
    try {
      const api = new GitHubAPI();
      const data = await api.getRepos(userName);
      if (data.length === 0) {
        dispatch(fetchReposFailure('User not found'));
      } else {
        dispatch(fetchReposSuccess(data));
      }
    } catch (error) {
      dispatch(fetchReposFailure(error.message));
    }
    setUserName('');
    setRepoName('');
  };

  return (
    <StyledGitHubComponent>
      <form className="github__form" onSubmit={handleUserSearch}>
        <label className="github__label">
          User Name:
          <input
            className="github__input github__input--username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name"
          />
        </label>
        <button className="github__button" type="submit">
          Find User
        </button>
      </form>

      <label className="github__label">
        Repository Name:
        <input
          className="github__input github__input--repo"
          type="text"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          placeholder="Enter Repository Name"
        />
      </label>

      {isFetching ? <p className="github__loading">Loading...</p> : null}
      {errorMessage ? <p className="github__error">{errorMessage}</p> : null}

      <ul className="github__list">
        {filteredRepos.map((repo) => (
          <li className="github__item" key={repo.id}>
            {repo.full_name}
          </li>
        ))}
      </ul>
    </StyledGitHubComponent>
  );
};

export default GitHub;
