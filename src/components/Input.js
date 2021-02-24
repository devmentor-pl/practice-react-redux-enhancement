import React from 'react';
import StyledInput from './styled/Input.styled';
import { useDispatch } from 'react-redux';
import { setUserName } from '../modules/github/github.actions';

const Input = () => {
    const dispatch = useDispatch();
    return (
        <StyledInput
            placeholder='USERNAME'
            onChange={(e) => dispatch(setUserName(e.target.value))}
        ></StyledInput>
    );
};

export default Input;
