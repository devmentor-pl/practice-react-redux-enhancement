import React, { useState } from 'react';
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
  const dispatch = useDispatch();

  const repos = useSelector((state) => state.repos || []);
  const isFetching = useSelector((state) => state.isFetching || false);
  const errorMessage = useSelector((state) => state.errorMessage || '');

  const handleSearch = async () => {
    dispatch(fetchReposStart());
    try {
      const api = new GitHubAPI();
      const data = await api.searchRepos(userName, repoName);
      dispatch(fetchReposSuccess(data.items));
    } catch (error) {
      dispatch(fetchReposFailure(error.message));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />
      <input
        type="text"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        placeholder="Repository Name"
      />
      <button onClick={handleSearch}>Search</button>
      {isFetching ? <p>Loading...</p> : null}
      {errorMessage ? <p>{errorMessage}</p> : null}
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.full_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHub;
