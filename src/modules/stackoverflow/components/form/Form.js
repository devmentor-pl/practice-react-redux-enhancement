import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import {
    getCommentsAction,
    setCommentError,
    removeCommentInputError,
    setCommentQuery,
} from '../../stackoverflow.actions';

import { useForm } from '../../../../hooks/useForm';
import Input from '../../../../components/Input';

function Form({ children }) {
    const { query, formError } = useSelector(state => state.stackOverFlow);
    const { inputRef, handleSubmit, handleChange } = useForm(
        query,
        setCommentQuery,
        getCommentsAction,
        setCommentError,
        removeCommentInputError,
    );

    return (
        <StyledFormWrapper>
            {children}
            <StyledForm onSubmit={handleSubmit}>
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
            </StyledForm>
        </StyledFormWrapper>
    );
}

export const StyledFormWrapper = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 200px;
    transition: flex 0.5s;
    && {
        ${({ $shrink }) =>
            $shrink === 'true' &&
            css`
                flex: 0.5;
            `}
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export default Form;
