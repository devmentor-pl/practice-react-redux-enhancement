import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, getResponse } from './stackoverflow.actions';

const StackOverflowBrowserComponent = () => {
	const state = useSelector((state) => state);
	const { values, response } = state;
	const dispatch = useDispatch();

	const HandleSubmit = (e) => {
		e.preventDefault(e);
		dispatch(getResponse());
	};

	const handleChange = ({ name, value }) => {
		dispatch(setFieldValue(name, value));
	};

	return (
		<section>
			<form onSubmit={(e) => HandleSubmit(e)}>
				<label>
					Search:
					<input
						name="search"
						value={values.search ? values.search : ''}
						onChange={(e) => handleChange(e.target)}
					/>
				</label>
				<button>Search</button>
			</form>
		</section>
	);
};

export default StackOverflowBrowserComponent;
