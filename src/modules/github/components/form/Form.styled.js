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

export const StyledSubmitButton = styled.button`
    &:disabled {
        background-color: var(--color-button-disabled);
    }
`;

export const StyledHeader = styled.header`
    margin-bottom: 2em;

    h2 {
        margin-bottom: 0.5em;
        /* color: var(--color-1); */
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
        text-align: center;
        /* background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center; */

        &:hover {
            background-color: var(--color-2);
        }

        &::placeholder {
            color: var(--font-color-placeholder);
            font-size: 1.1em;
            /* padding-left: 10%; */
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
    top: calc(17%);
    // trochę łopatologicznie, ale nie widziałem w jaki inny sposób
    // wycentrować ikonę, żeby była przed tekstem nawet przy zmiane szerokości
    left: calc(50% - 90px);
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
