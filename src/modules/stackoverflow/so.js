import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue, getResponse, toggleCheckbox } from './so.actions';

const StackOverflow = () => {
    const dispatch = useDispatch();
    const { userQuery, sortMethod } = useSelector((store) => store.request);

    const [isAnswered, setIsAnswered] = useState(false);
    // const [query, setQuery] = useState('');
    // const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(setFieldValue('isAnswered', isAnswered));
    }, [isAnswered]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getResponse());
    };

    const handleInputChange = ({ name, value }) => {
        dispatch(setFieldValue(name, value));
    };

    const renderResults = () =>
        filteredResults.map((record, index) => <li key={record}>{record}</li>);

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

                    <button type='submit'>Search</button>
                </form>
            </div>
            <div>
                <div>
                    <label>
                        <input
                            name='isAnswered'
                            type='checkbox'
                            value={isAnswered}
                            onClick={() => setIsAnswered(!isAnswered)}
                        />
                        Filter out unanswered
                    </label>
                </div>
                <div>
                    <input
                        name='sortMethod'
                        type='radio'
                        id='asc'
                        value='asc'
                        onChange={(e) => handleInputChange(e.target)}
                    />
                    <label htmlFor='asc'>Ascending</label>
                    <input
                        name='sortMethod'
                        type='radio'
                        id='desc'
                        value='desc'
                        onChange={(e) => handleInputChange(e.target)}
                    />
                    <label htmlFor='desc'>Descending</label>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default StackOverflow;
