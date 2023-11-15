import React, { useState } from 'react';
import StackOverflow from './stack.api';

const StackComponent = () => {
	const [inputValue, setInputValue] = useState('');
	const [test, setTest] = useState(null);
	const [sortBy, setSortBy] = useState('activity');
	const fakeStackOverflow = new StackOverflow();

	const fetchData = async (question, sortingFlag) => {
		try {
			const phrase = question.replace(/\s/g, '%20');
			const results = await fakeStackOverflow.getAnswers(phrase, sortingFlag);
			const items = results.items.map(item => item);

			setTest(items);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleSearch = e => {
		e.preventDefault();
		fetchData(inputValue, sortBy);
	};
	const setSortingFlag = () => {
		sortBy === 'activity' ? setSortBy('value') : setSortBy('activity');
	};

	return (
		<>
			<form onSubmit={handleSearch}>
				<div>
					<label htmlFor=''>default search : by activity | check for searching by value</label>
					<input type='checkbox' onChange={setSortingFlag} />
				</div>

				<input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
				<input type='submit' value='hejka' />
			</form>
			{test && (
				<ul>
					{test.map((link, index) => (
						<a target={'_blank'} style={{ display: 'inline' }} href={link.link} key={index}>
							{link.title}
						</a>
					))}
				</ul>
			)}
		</>
	);
};
export default StackComponent;
