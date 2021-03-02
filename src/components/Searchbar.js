import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StyledInput from './styled/Input.styled';
import {
    setFilterQuery,
    setFilteredRepos,
} from '../modules/github/github.actions';

const Searchbar = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const repoQuery = useSelector((store) => store.repoQuery);

    useEffect(() => {
        dispatch(setFilterQuery(filter));
    }, [filter]);

    return (
        <StyledInput
            placeholder='FILTER...'
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            onBlur={(e) => dispatch(setFilteredRepos())}
        />
    );
};

export default Searchbar;
