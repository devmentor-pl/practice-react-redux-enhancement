import React, { useState, useEffect } from 'react';
import StyledInput from './styled/Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, getRepos } from '../modules/github/github.actions';

const Input = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const username = useSelector((store) => store.username);

    useEffect(() => {
        if (query.length > 2) {
            dispatch(setUserName(query));
        }
    }, [query]);

    return (
        <StyledInput
            placeholder='USERNAME'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onBlur={(e) => dispatch(getRepos())}
        ></StyledInput>
    );
};

export default Input;
