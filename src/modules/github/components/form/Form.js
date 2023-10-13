import React, { useEffect } from 'react';
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
    const { user, formError, fetchLoading } = useSelector(state => state.github);
    const dispatch = useDispatch();

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
        // reset form
    };

    const handleChange = e => {
        const { value } = e.target;
        if (value.length > 0) dispatch(setKeyToEmptyString('formError'));
        dispatch(setUserAction(value));
    };

    return (
        <StyledFormWrapper>
            <StyledHeader>
                <h2>Look for user's repos</h2>
                <p>Type user name and find their repositories on github.</p>
            </StyledHeader>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInputWrapper>
                    {/* <label htmlFor='user'>User:</label> */}
                    <input name='user' id='user' onChange={handleChange} value={user} placeholder='type user name...' />
                    <StyledIconWrapper value={user}>
                        <UilSearch />
                    </StyledIconWrapper>
                    <StyledInputError>{formError}</StyledInputError>
                </StyledInputWrapper>
                <StyledSubmitButton type='submit' disabled={fetchLoading}>
                    {fetchLoading ? <Spinner /> : 'FIND USER'}
                </StyledSubmitButton>
            </StyledForm>
        </StyledFormWrapper>
    );
}

export default Form;
