import React, { useState } from 'react';
import StackOverflowAPI from './stack.api';
import { useDispatch, useSelector } from 'react-redux';
import { insertErrorAction, insertResultsAction } from './stack.action';

const StackComponent = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');
	const results = useSelector(state => state.results);
	const error = useSelector(state => state.errors);
	const [loading, setLoading] = useState(false);
	const [sortBy, setSortBy] = useState('activity');
	const fakeStackOverflow = new StackOverflowAPI();

	const fetchData = async (question, sortingFlag) => {
		try {
			setLoading(true);
			dispatch(insertErrorAction(null))
			const phrase = question.replace(/\s/g, '%20');
			
			const results = await fakeStackOverflow.getAnswers(phrase, sortingFlag);
			const items = results.items.map(item => item);
			dispatch(insertResultsAction(items));
		} catch (error) {
			dispatch(insertErrorAction(error.message));
			dispatch(insertResultsAction(null))
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = e => {
		e.preventDefault();
		fetchData(inputValue + '%20', sortBy);
	};
	const setSortingFlag = () => {
		sortBy === 'activity' ? setSortBy('votes') : setSortBy('activity');
	};

	return (
		<>
			<form onSubmit={handleSearch}>
				<div>
					<label htmlFor=''>default search : by activity | check for searching by votes </label>
					<input type='checkbox' onChange={setSortingFlag} />
				</div>

				<input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
				<input type='submit' />
			</form>
			{loading && <p>wyszukuję...</p>}
			{results && (
				<ul>
					{results.map((link, index) => (
						<li key={index}>
							<a target={'_blank'} href={link.link}>
								{link.title}
							</a>
						</li>
					))}
				</ul>
			)}
			{error && <p>{error}</p>}
		</>
	);
};
export default StackComponent;
