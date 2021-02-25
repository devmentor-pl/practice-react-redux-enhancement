import React, { useState } from 'react';
import StyledInput from './styled/Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, getRepos } from '../modules/github/github.actions';

const Input = () => {
    const dispatch = useDispatch();
    const username = useSelector((store) => store.username);

    return (
        <StyledInput
            placeholder='USERNAME'
            onChange={(e) => dispatch(setUserName(e.target.value))}
            value={username}
            onBlur={(e) => dispatch(getRepos())}
        ></StyledInput>
    );
};

export default Input;
