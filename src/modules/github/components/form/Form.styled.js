import styled, { css } from 'styled-components';

export const StyledFormWrapper = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledSubmitButton = styled.button`
    &:disabled {
        background-color: var(--color-button-disabled);
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

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    position: relative;

    input {
        padding: 1em;
        border-radius: 10px;
        background-color: var(--color-input-background);
        border: none;
        outline: none;
        border: 2px solid transparent;

        &:hover {
            background-color: var(--color-2);
        }

        &::placeholder {
            color: var(--font-color-placeholder);
            font-size: 1.1em;
            padding-left: 120px;
        }

        &:focus {
            border-color: var(--color-1);
        }
    }
`;

export const StyledInputError = styled.div`
    color: var(--font-color-error);
    margin-top: 5px;
    min-height: 1em;
`;

export const StyledIconWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 105px;
    pointer-events: none;
    ${({ value }) =>
        value !== '' &&
        css`
            display: none;
        `}

    svg {
        transform: scale(0.8);
        color: darkgrey;
    }
`;
