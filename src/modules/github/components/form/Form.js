import React from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '../../../../hooks/useForm';
import { getReposAction, setFormError, setKeyToEmptyString, setUserAction } from '../../github.actions';
import Spinner from '../../../../components/Spinner';
import Input from '../../../../components/Input';
import Header from '../../../../components/Header';

import { StyledFormWrapper, StyledForm } from './Form.styled';

function Form() {
    const { user, formError, fetchLoading, repos } = useSelector(state => state.github);
    const { inputRef, handleSubmit, handleChange } = useForm(
        user,
        setUserAction,
        getReposAction,
        setFormError,
        setKeyToEmptyString,
    );
    const reposLoaded = repos.length > 0;

    return (
        <StyledFormWrapper $shrink={reposLoaded.toString()}>
            <Header>
                <h2>Look for user's repos</h2>
                <p>Type user name and find their repositories on github.</p>
            </Header>
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
