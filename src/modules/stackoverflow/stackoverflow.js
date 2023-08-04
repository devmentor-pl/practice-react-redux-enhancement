import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThreads } from "./stackoverflow.actions";

const StackOverFlow = () => {
	const [query, setQuery] = useState("");

	const dispatch = useDispatch();
	const threads = useSelector(state => state.threads);
	const errMessages = useSelector(state => state.messages);

	const handleFormSubmit = e => {
		e.preventDefault();
		dispatch(getThreads(query));
		setQuery("");
		console.log(threads);
	};
	const sortItemsByReputation = threads.sort((a, b) => {
		return b.owner.reputation - a.owner.reputation;
	});

	const showThreads = sortItemsByReputation.map(thread => {
		return <li key={thread.title}>{thread.title}</li>;
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
			<h1>StackOverFlow</h1>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor='query'>Search StackOverFlow</label>
				<input
					name='query'
					type='text'
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
				<button type='submit'>search</button>
			</form>
			{errMessages.length > 0 && <ul>{showErrors}</ul>}
			{threads && <ul> {showThreads}</ul>}
		</section>
	);
};

export default StackOverFlow;
