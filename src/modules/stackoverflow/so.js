import React, { useState, useEffect } from 'react';
import Select from '../../components/Select'
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue, getResponse, toggle } from './so.actions';

const StackOverflow = () => {
    const dispatch = useDispatch();
    const { request, response } = useSelector((store) => store.stackoverflow);
    const { userQuery, sortMethod, isAnswered } = request;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getResponse());
    };

    const handleInputChange = ({ name, value }) => {
        dispatch(setFieldValue(name, value));
    };

    const renderQuestions = () => {
        return response.map((item) => {
            const { title, score, question_id, link } = item;
            return (
                <li key={question_id}>
                    <a href={link}>{title} </a>
                    <p>Score: {score}</p>
                </li>
            );
        });
    };

    const renderForm = () => (
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
                <button type='submit'>Search</button>
            </form>
        </div>
    )

    return (
        <section>
            {renderForm()}
                <div>
                    <Select
                        label="Order:"
                        name='order'
                        handleInputChange={handleInputChange}
                    >
                        <option value='desc'>Descending</option>
                        <option value='asc'>Ascending</option>
                    </Select>
                    <Select
                        label="Sort:"
                        name='sortMethod'
                        handleInputChange={handleInputChange}
                    >
                        <option value='relevance'>Relevance</option>
                        <option value='votes'>Votes</option>
                        <option value='creation'>Creation</option>
                    </Select>
                    <label>
                        <input
                            name='isAnswered'
                            type='checkbox'
                            checked={isAnswered}
                            onChange={(e) => dispatch(toggle(e.target))}
                        />
                        Hide unanswered
                    </label>
                </div>
                <ul>{response.length > 0 ? renderQuestions() : null}</ul>
        </section>
    );
};

export default StackOverflow;