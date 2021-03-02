import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StyledInput from '../../components/styled/Input.styled';
import StyledStackOverFlow from '../../components/styled/StackOverflow.styled';
import { useSelector } from 'react-redux';

import { setSearchQuery, setFilterQuery } from './so.actions';

const StackOverflow = () => {
    const dispatch = useDispatch();
    const filteredResults = useSelector((store) => store.filteredResults);
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(setSearchQuery(query));
    }, [query]);

    useEffect(() => {
        dispatch(setFilterQuery(filter));
    }, [filter]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const renderResults = () => {
        filteredResults.map((record, index) => {
            return <li key={record}>{record}</li>;
        });
    };

    return (
        <>
            <StyledStackOverFlow>
                <img
                    src='../../../assets/img/stackO.png'
                    style={{ height: '60px' }}
                />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <StyledInput
                        placeholder='stackoverflow'
                        name='user'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <StyledInput
                        placeholder='filter'
                        name='soFilter'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </form>
            </StyledStackOverFlow>
            <div>
                <ul>{renderResults()}</ul>
            </div>
        </>
    );
};

export default StackOverflow;
