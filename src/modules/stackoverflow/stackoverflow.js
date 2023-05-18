import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getThreads } from './stackoverflow.actions';

const StackoverFlow = () => {
	const [query, setQuery] = useState('');
	const threads = useSelector((state) => state.stack.threads);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getThreads(query));
		setQuery('');
	};

	const threadsView = threads
		.sort((a, b) => b.owner.reputation - a.owner.reputation)
		.map((item) => (
			<li key={item.question_id}>
				<p>{item.title}</p>
				<a href={item.link}>Link</a>
			</li>
		));

	console.log(threads);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='query'>Przeszukaj StackOverFlow:</label>
					<input
						type='text'
						onChange={handleChange}
						name='query'
						value={query}
						id='query'
					/>
					<button>Wyślij</button>
				</div>
			</form>
			{threads && <ul>{threadsView}</ul>}
		</section>
	);
};

export default StackoverFlow;
