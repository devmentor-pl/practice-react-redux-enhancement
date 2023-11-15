import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReposAction, setErrorAction } from './github.actions';
import GitHubAPI from './github.api';

const GithubComponent = () => {
	const dispatch = useDispatch();
	const newUser = new GitHubAPI();

	const [searchValue, setSearchValue] = useState('');
	const [filterReposValue, setFilterReposValue] = useState('');
	const [loading, setLoading] = useState(false);

	const repos = useSelector(state => state.repos);
	const error = useSelector(state => state.errors);

	const fetchData = async userName => {
		try {
			setLoading(true);
			dispatch(setErrorAction(null));
			const repos = await newUser.getRepos(userName);
			const reposName = repos.map(repo => repo.name);
			dispatch(setReposAction(reposName));
		} catch (err) {
			dispatch(setErrorAction(err.message));
			dispatch(setReposAction(''));
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetchData(searchValue);
	};
	const filteredRepos = filterReposValue
		? repos.filter(repo => repo.toLowerCase().includes(filterReposValue.toLowerCase()))
		: repos;

	return (
		<>
			<form onSubmit={handleSubmit} action=''>
				<h3>write github nick for search a repo</h3>
				<input type='text' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
				<input type='submit' value={'search'} />
			</form>
			{loading && <p>ładuję...</p>}
			{repos.length > 0 && (
				<ul>
					<input
						placeholder='filter repos here...'
						value={filterReposValue}
						type='text'
						onChange={e => setFilterReposValue(e.target.value)}
					/>

					{filteredRepos.map((repo, index) => (
						<li key={index}>{repo}</li>
					))}
				</ul>
			)}
			{error === '404' ? <p>repo not found...</p> : null}
		</>
	);
};
export default GithubComponent;
