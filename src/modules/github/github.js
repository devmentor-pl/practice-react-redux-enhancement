import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepos } from './github.actions';

const GitHub = () => {
	const [user, setUser] = useState('');
	const [phrase, setPhrase] = useState('');
	const { repos, messages } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		if (e.target.name === 'user') {
			setUser(e.target.value);
		} else {
			setPhrase(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getRepos(user));
		setUser('');
	};

	const reposView = repos
		.filter((repo) => repo.name.includes(phrase))
		.map((repo) => <li key={repo.name}>{repo.name}</li>);

	const messagesView = messages.map((item) => <li>{item.message}</li>);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='user'>User</label>
					<input
						type='text'
						onChange={handleChange}
						name='user'
						value={user}
						id='user'
					/>
					<button>Wyślij</button>
				</div>
			</form>
			<div>
				<label htmlFor='phrase'>Filtruj</label>
				<input
					type='text'
					onChange={handleChange}
					name='phrase'
					value={phrase}
					id='phrase'
				/>
			</div>
			{messages.length > 0 && <ul>{messagesView}</ul>}
			{repos && <ul> {reposView}</ul>}
		</section>
	);
};

export default GitHub;
