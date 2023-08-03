import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRepos, setErrorAction } from "./github.actions";

const GitHub = () => {
	const [user, setUser] = useState("");
	const [phrase, setPhrase] = useState("");

	const dispatch = useDispatch();
	const repositories = useSelector(state => state.repos);
	const errMessages = useSelector(state => state.messages);

	const handleFormSubmit = e => {
		e.preventDefault();
		dispatch(handleRepos(user));
		setUser("");
		console.log(repositories);
	};
	const filteredRepos = repositories.filter(repo => {
		repo.name.includes(phrase);
	});

	const showRepos = filteredRepos.map(repo => {
		return <li key={repo.name}>{repo.name}</li>;
	});

	const showErrors = errMessages.map(err => {
		return (
			<li>
				{err.message}
				{err.type}
			</li>
		);
	});

	return (
		<section>
			<h1>GitHub repos</h1>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor='user'>Show user's repos</label>
				<input
					name='user'
					type='text'
					value={user}
					onChange={e => setUser(e.target.value)}
				/>
				<button type='submit'>search</button>
			</form>
			<div>
				<label htmlFor='repo'>Find a repo</label>
				<input
					name='repo'
					type='text'
					value={phrase}
					onChange={e => setPhrase(e.target.value)}
				/>
			</div>
			{errMessages.length > 0 && <ul>{showErrors}</ul>}
			{repositories && <ul> {showRepos}</ul>}
		</section>
	);
};

export default GitHub;
