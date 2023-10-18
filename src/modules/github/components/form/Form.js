import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getReposAction, setFormError, setKeyToEmptyString, setUserAction } from '../../github.actions';
import Spinner from '../../../../components/Spinner';
import Input from '../../../../components/Input';

import { StyledFormWrapper, StyledHeader, StyledForm } from './Form.styled';

function Form() {
    const { user, formError, fetchLoading, repos } = useSelector(state => state.github);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const reposLoaded = repos.length > 0;

    const handleSubmit = e => {
        e.preventDefault();

        const isEmptyInput = user.length === 0;
        if (isEmptyInput) {
            dispatch(setFormError('field cannot be empty'));
            return;
        }

        dispatch(getReposAction(user));

        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const handleChange = e => {
        const { value } = e.target;
        if (value.length > 0) dispatch(setKeyToEmptyString('formError'));
        dispatch(setUserAction(value));
    };

    return (
        <StyledFormWrapper $shrink={reposLoaded.toString()}>
            <StyledHeader>
                <h2>Look for user's repos</h2>
                <p>Type user name and find their repositories on github.</p>
            </StyledHeader>
            <StyledForm onSubmit={handleSubmit}>
                <Input
                    ref={inputRef}
                    name='user'
                    id='user'
                    onChange={handleChange}
                    value={user}
                    placeholder='search for a user...'
                    hoverColor='dark'
                    error={formError}
                />
            </StyledForm>
            {fetchLoading && <Spinner />}
        </StyledFormWrapper>
    );
}

export default Form;
