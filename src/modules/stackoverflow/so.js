import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledInput from '../../components/styled/Input.styled';
import StyledStackOverFlow from '../../components/styled/StackOverflow.styled';
import { setFieldValue, getResponse } from './so.actions';

const StackOverflow = () => {
    const dispatch = useDispatch();
    const { userQuery } = useSelector((store) => store.request);
    // const [query, setQuery] = useState('');
    // const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     dispatch(setSearchQuery(query));
    // }, [query]);

    // useEffect(() => {
    //     dispatch(setFilterQuery(filter));
    // }, [filter]);

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
        <StyledStackOverFlow>
            <div>
                <img
                    src='../../../assets/img/stackO.png'
                    style={{ height: '60px' }}
                />
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    style={{ display: 'flex' }}
                >
                    <StyledInput
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
                    <label htmlFor='isAnswered'>
                        <input id='isAnswered' type='checkbox' checked />
                    </label>
                </div>
                <div></div>
                <div></div>
            </div>
        </StyledStackOverFlow>
    );
};

export default StackOverflow;
