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

function FormSection() {
    const { query, formError } = useSelector(state => state.stackOverFlow);
    const { inputRef, handleSubmit, handleChange } = useForm(
        query,
        setCommentQuery,
        getCommentsAction,
        setCommentError,
        removeCommentInputError,
    );

    return (
        <Form onSubmit={handleSubmit}>
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
                placeholder='search for a user...'
                hoverColor='dark'
                error={formError}
            />
        </Form>
    );
}

export default FormSection;
