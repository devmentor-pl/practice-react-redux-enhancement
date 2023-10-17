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
