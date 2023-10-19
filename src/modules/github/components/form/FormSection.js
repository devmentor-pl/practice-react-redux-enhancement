import React from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '../../../../hooks/useForm';
import { getReposAction, setFormError, setKeyToEmptyString, setUserAction } from '../../github.actions';
import Form from '../../../../components/Form';
import Spinner from '../../../../components/Spinner';
import Input from '../../../../components/Input';
import Header from '../../../../components/Header';

function FormSection() {
    const { user, formError, fetchLoading, repos } = useSelector(state => state.github);
    const { inputRef, handleSubmit, handleChange } = useForm(
        user,
        setUserAction,
        getReposAction,
        setFormError,
        setKeyToEmptyString,
    );
    const reposLoaded = (repos.length > 0).toString();

    return (
        <Form onSubmit={handleSubmit} shrink={reposLoaded}>
            <Header>
                <h2>Look for user's repos</h2>
                <p>Type user name and find their repositories on github.</p>
            </Header>
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
            {fetchLoading && <Spinner />}
        </Form>
    );
}

export default FormSection;
