import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, getResponse, setResponse } from './stackoverflow.actions';

const StackOverflow = () => {
	const { values, response } = useSelector((state) => state.stackoverflow);
	const dispatch = useDispatch();

	useEffect(() => {
		if (values.search) {
			dispatch(getResponse());
		}
	}, [values.sortByDate]);

	useEffect(() => {
		if (response.length !== 0) {
			const sortedByReputation = response.sort((a, b) => {
				return values.sortByReputation === 'desc' ? sortDescending(a, b) : sortAscending(a, b)
			});
			dispatch(setResponse(sortedByReputation))
		}

	  }, [values.sortByReputation]);

	const sortDescending = (a, b) => {
		return b.owner.reputation - a.owner.reputation
	}
	const sortAscending = (a, b) => {
		return a.owner.reputation - b.owner.reputation
	}

	const renderQueriesList = (queries) => {
		const listItems = queries.map((query, index) => createQuery(query, index));
		return <ol>{listItems}</ol>;
	};

	const createQuery = (query, index) => {
		const {title, link, is_answered: isAnswered, answer_count: answerCount} = query;
		const color = isAnswered ? 'black' : 'grey'
		return <li key={index}>{
			<ul>
				<h4><a style={{color: `${color}`}} href={link}>{title}</a></h4> 
				<p>Liczba odpowiedzi: {isAnswered ? answerCount : 0}</p>
			</ul>
		}</li>;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getResponse());
	}

	const handleChange = ({ name, value }) => {
		dispatch(setFieldValue(name, value));
	};

	return (
		<section>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>Szukaj: 
					<input value={values.search} name="search" onChange={(e) => handleChange(e.target)}/>
				</label>
				<button>Szukaj</button>	
				<label>
					Sortuj według daty:
					<select name="sortByDate" onChange={(e) => handleChange(e.target)}>					
						<option value='desc'>malejąco</option>
						<option value='asc'>rosnąco</option>
					</select>
				</label>
				<label>
					Sortuj według reputacji:
					<select name="sortByReputation" onChange={(e) => handleChange(e.target)}>
						<option value='desc'>malejąco</option>
						<option value='asc'>rosnąco</option>
					</select>
				</label>
			</form>
				{response.length !== 0 && renderQueriesList(response)}
		</section>
	);
};

export default StackOverflow;