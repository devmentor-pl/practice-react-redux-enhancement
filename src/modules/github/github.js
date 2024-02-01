import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReposStart, fetchReposSuccess, fetchReposFailure, filterRepos } from './github.actions';
import {GitHubAPI} from './github.api';

const GitHub = () => {
    const [username, setUsername] = useState('');
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const repos = useSelector(state => state.github.repos);
    const gitHubAPI = new GitHubAPI();

    const handleSearch = () => {
        dispatch(fetchReposStart());
        gitHubAPI.getRepos(username)
            .then(repos => dispatch(fetchReposSuccess(repos)))
            .catch(error => dispatch(fetchReposFailure(error.toString())));
    };

    const handleFilterChange = (e) => {
        setSearchString(e.target.value);
        dispatch(filterRepos(e.target.value));
    };

    const filteredRepos = searchString ? 
        repos.filter(repo => repo.name.includes(searchString)) : repos;

    return (
        <div>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="GitHub username" 
            />
            <button onClick={handleSearch}>Search Repositories</button>
            <input 
                type="text" 
                value={searchString} 
                onChange={handleFilterChange} 
                placeholder="Filter repositories" 
            />
            <ul>
                {filteredRepos.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GitHub;