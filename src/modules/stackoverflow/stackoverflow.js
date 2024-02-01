import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionsStart, fetchQuestionsSuccess, fetchQuestionsFailure } from './stackoverflow.actions';
import StackOverflowAPI from './stackoverflow.api';

const StackOverflow = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { questions, isFetching, errorMessage } = useSelector(state => state.stackoverflow);
    const stackOverflowAPI = new StackOverflowAPI();
  
    const handleSearch = () => {
        dispatch(fetchQuestionsStart());
        stackOverflowAPI.search(query)
            .then(data => {
            dispatch(fetchQuestionsSuccess(data));
            })
            .catch(error => {
            dispatch(fetchQuestionsFailure(error.toString()));
            });
    };
  
    return (
        <div>
            <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search StackOverflow" 
            />
            <button onClick={handleSearch} disabled={isFetching}>Search</button>
            {isFetching && <div>Loading...</div>}
            {errorMessage && <div>Error: {errorMessage}</div>}
            <ul>
            {questions.map(question => (
                <li key={question.question_id}>
                {question.title} - {question.score} points
                </li>
            ))}
            </ul>
        </div>
    );
};

export default StackOverflow;
