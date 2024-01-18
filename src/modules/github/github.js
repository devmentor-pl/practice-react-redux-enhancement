import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReposStart,
  fetchReposSuccess,
  fetchReposFailure,
} from './github.actions';
import GitHubAPI from './github.api';

const GitHub = () => {
  const [userName, setUserName] = useState('');
  const [repoName, setRepoName] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);

  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos || []);
  const isFetching = useSelector((state) => state.isFetching || false);
  const errorMessage = useSelector((state) => state.errorMessage || '');

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
  };

  return (
    <>
      <form onSubmit={handleUserSearch}>
        <label>
          User Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name"
          />
        </label>
        <button type="submit">Find User</button>
      </form>
      <label>
        Repository Name:
        <input
          type="text"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          placeholder="Enter Repository Name"
        />
      </label>
      {isFetching ? <p>Loading...</p> : null}
      {errorMessage ? <p>{errorMessage}</p> : null}
      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.id}>{repo.full_name}</li>
        ))}
      </ul>
    </>
  );
};

export default GitHub;
