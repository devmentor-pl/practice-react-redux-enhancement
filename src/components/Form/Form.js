import React from 'react';
import styled, { css } from 'styled-components';

function Form({ children, onSubmit, shrink }) {
    return (
        <StyledFormWrapper onSubmit={onSubmit} $shrink={shrink}>
            <StyledForm>{children}</StyledForm>
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
