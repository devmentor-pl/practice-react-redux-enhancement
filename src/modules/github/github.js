import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReposAction } from './github.actions';

const Github = () => {
	const [username, setUsername] = useState('');
	const [searchPhrase, setSearchPhrase] = useState('');
	const dispatch = useDispatch();
	const repositories = useSelector((state) => state.repositories);
	const errorMessages = useSelector((state) => state.messages);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getReposAction(username));
		setUsername('');
		setSearchPhrase('');
	};

	const filteredRepositoriesByName = repositories.filter((repo) =>
		repo.name.includes(searchPhrase)
	);

	const renderRepoList = filteredRepositoriesByName.map((repo) => (
		<li key={repo.name}>
			<a
				href={repo.html_url}
				target='_blank'>
				{repo.name}
			</a>
		</li>
	));

	const renderError = errorMessages.map((error) => <li>{error.message}</li>);

	return (
		<section>
			<h3>GithubApp</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>
					Show user repositories:{' '}
					<input
						name='username'
						placeholder='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<button type='submit'>send</button>
			</form>
			{repositories.length > 0 ? (
				<label htmlFor='searchPhrase'>
					Search repository:{' '}
					<input
						name='searchPhrase'
						placeholder='repository name'
						value={searchPhrase}
						onChange={(e) => setSearchPhrase(e.target.value)}
					/>
				</label>
			) : null}
			<ul>{renderRepoList}</ul>
			<ul>{renderError}</ul>
		</section>
	);
};

export default Github;
