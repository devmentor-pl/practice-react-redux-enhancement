import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNameField, getResponse, } from './stackoverflow.actions';


const StackOverflowComponent = () => {
    const state = useSelector((state) => state);
	const { values, response } = state;
	const dispatch = useDispatch();


	const HandleSubmit = (e) => {
		e.preventDefault(e);
		dispatch(getResponse());
	};

	const handleChange = ({ name, value }) => {
	dispatch(getNameField(name, value));
	};

	return (
		
		<section>
			<h2>Task 03</h2>
			<form onSubmit={(e) => HandleSubmit(e)}>
                <label>
                    Search:
                    <input 
                        name="title"
                        value={values.search ? values.search : ''}
                        onChange={(e) => handleChange(e.target)}
                        />
                </label>
                <button>Search</button>
                </form>
		</section>
	
	);
};

export default StackOverflowComponent;