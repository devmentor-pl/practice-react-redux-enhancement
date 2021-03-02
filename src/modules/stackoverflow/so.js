import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StyledInput from '../../components/styled/Input.styled';

import { setSearchQuery, setFilterQuery } from './so.actions';

const StackOverflow = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // update state in redux
        dispatch(setSearchQuery(query));
        dispatch(setFilterQuery(filter));
    }, [query, filter]);

    return (
        <div
            style={{
                width: '300px',
                backgroundColor: 'mistyrose',
                padding: '5px',
            }}
        >
            <StyledInput
                placeholder='stackoverflow'
                name='soQuery'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <StyledInput
                placeholder='filter'
                name='soFilter'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
};

export default StackOverflow;
