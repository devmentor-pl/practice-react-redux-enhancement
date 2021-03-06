import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue, getResponse, toggle } from './so.actions';

const StackOverflow = () => {
    const dispatch = useDispatch();
    const { userQuery, sortMethod, isAnswered } = useSelector(
        (store) => store.request
    );
    const response = useSelector((store) => store.response);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getResponse());
    };

    const handleInputChange = ({ name, value }) => {
        dispatch(setFieldValue(name, value));
    };

    const renderQuestions = () => {
        return response.map((item) => {
            const { is_answered, title, score, question_id, link } = item;
            return (
                <>
                    <a href={link}>
                        <li key={question_id}>
                            <p>Title: {title}</p>
                        </li>
                    </a>
                    <p>Score: {score}</p>
                </>
            );
        });
    };

    return (
        <section>
            <div>
                <img
                    src='../../../assets/img/stackO.png'
                    style={{ height: '60px' }}
                />
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    style={{ display: 'flex' }}
                >
                    <input
                        placeholder='Browse Stackoverflow'
                        name='userQuery'
                        value={userQuery}
                        onChange={(e) => handleInputChange(e.target)}
                    />

                    <label>
                        <input
                            name='isAnswered'
                            type='checkbox'
                            checked={isAnswered}
                            onChange={(e) => dispatch(toggle(e.target))}
                        />
                        Hide unanswered
                    </label>

                    <button type='submit'>Search</button>
                </form>
            </div>
            <div>
                <div>
                    <select
                        name='order'
                        onChange={(e) => handleInputChange(e.target)}
                    >
                        Order:
                        <option value='desc'>Descending</option>
                        <option value='asc'>Ascending</option>
                    </select>
                    <select
                        name='sortMethod'
                        onChange={(e) => handleInputChange(e.target)}
                    >
                        Order:
                        <option value='relevance'>Relevance</option>
                        <option value='votes'>Votes</option>
                        <option value='creation'>Creation</option>
                    </select>
                </div>
                <ul>{response.length > 0 ? renderQuestions() : null}</ul>
            </div>
        </section>
    );
};

export default StackOverflow;
