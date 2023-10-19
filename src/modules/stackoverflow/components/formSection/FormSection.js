import React from 'react';
import { useSelector } from 'react-redux';

import {
    getCommentsAction,
    setCommentError,
    removeCommentInputError,
    setCommentQuery,
} from '../../stackoverflow.actions';

import { useForm } from '../../../../hooks/useForm';
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import Header from '../../../../components/Header';
import Spinner from '../../../../components/Spinner';

function FormSection() {
    const { query, formError, fetchLoading, comments } = useSelector(state => state.stackOverFlow);
    const { inputRef, handleSubmit, handleChange } = useForm(
        query,
        setCommentQuery,
        getCommentsAction,
        setCommentError,
        removeCommentInputError,
    );
    const commentsLoaded = (comments.length > 0).toString();

    return (
        <Form onSubmit={handleSubmit} shrink={commentsLoaded}>
            <Header>
                <h2>Look for topics</h2>
                <p>Find questions on Stack Overflow</p>
            </Header>
            <Input
                ref={inputRef}
                name='user'
                id='user'
                onChange={handleChange}
                value={query}
                placeholder='search for topics...'
                hoverColor='dark'
                error={formError}
            />
            {fetchLoading && <Spinner />}
        </Form>
    );
}

export default FormSection;
