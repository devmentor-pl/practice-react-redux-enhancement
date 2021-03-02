import React, { useState, useEffect } from 'react';
import useDispatch from 'react-redux';
import StyledInput from '../../components/styled/Input.styled';

import { setSearchQuery } from './so.actions';

const StackOverflow = () => {
    const [soQuery, setSoQuery] = useState('');
    const [filterQuery, setFilterQuery] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        // update state in redux
        dispatch(setSearchQuery(soQuery));
    }, [soQuery, filterQuery]);

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
                value={soQuery}
                onChange={(e) => setSoQuery(e.target.value)}
            />
            <StyledInput
                placeholder='filter'
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
            />
        </div>
    );
};

export default StackOverflow;
