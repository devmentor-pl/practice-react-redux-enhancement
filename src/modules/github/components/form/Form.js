import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UilSearch } from '@iconscout/react-unicons';

import { getReposAction, setFormError, setKeyToEmptyString, setUserAction } from '../../github.actions';
import Spinner from '../../../../components/Spinner';

import {
    StyledSubmitButton,
    StyledFormWrapper,
    StyledHeader,
    StyledForm,
    StyledInputWrapper,
    StyledIconWrapper,
    StyledInputError,
} from './Form.styled';

function Form() {
    const { user, formError, fetchLoading, repos } = useSelector(state => state.github);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const reposLoaded = repos.length > 0;

    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleSubmit = e => {
        e.preventDefault();

        const isEmptyInput = user.length === 0;
        if (isEmptyInput) {
            dispatch(setFormError('field cannot be empty'));
            return;
        }

        console.log('przeszło');

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
                <StyledInputWrapper>
                    {/* <label htmlFor='user'>User:</label> */}
                    <input
                        ref={inputRef}
                        name='user'
                        id='user'
                        onChange={handleChange}
                        value={user}
                        placeholder='search for a user...'
                    />
                    <StyledIconWrapper value={user}>
                        <UilSearch />
                    </StyledIconWrapper>
                    <StyledInputError>{formError}</StyledInputError>
                </StyledInputWrapper>
            </StyledForm>
            {fetchLoading && <Spinner />}
        </StyledFormWrapper>
    );
}

export default Form;
