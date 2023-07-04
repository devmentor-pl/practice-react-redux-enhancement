import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsAction } from './stackoverflow.actions';

const StackOverflow = () => {
	const { items, messages } = useSelector((state) => state.stackoverflow);
	const dispatch = useDispatch();
	const [searchTitle, setSearchTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(getItemsAction(searchTitle));
		setSearchTitle('');
	};

	const sortItemsByReputation = items.sort((a, b) => {
		return b.owner.reputation - a.owner.reputation;
	});

	const renderItems = sortItemsByReputation.map((item) => (
		<li key={item.question_id}>
			<a href={item.link}>{item.title}</a>
		</li>
	));

	const renderError = messages.map((error) => <li>{error.message}</li>);

	return (
		<section>
			<h3>StackOverflow</h3>
			<form onSubmit={handleSubmit}>
				<label>
					Search stackoverflow:{' '}
					<input
						value={searchTitle}
						onChange={(e) => setSearchTitle(e.target.value)}></input>
				</label>
				<button type='submit'>search</button>
			</form>
			<ul>{renderItems}</ul>
			<ul>{messages.length > 0 ? renderError : null}</ul>
		</section>
	);
};

export default StackOverflow;
