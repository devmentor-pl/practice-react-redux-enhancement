import styled, { css } from 'styled-components';

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

export const StyledHeader = styled.header`
    margin-bottom: 2em;

    h2 {
        margin-bottom: 0.5em;
    }

    p {
        color: var(--font-color);
        line-height: 1.3;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;