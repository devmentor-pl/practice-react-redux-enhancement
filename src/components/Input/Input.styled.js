import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    position: relative;
`;

export const StyledInput = styled.input`
    padding: 1em;
    border-radius: 10px;
    background-color: var(--color-input-background);
    border: none;
    outline: none;
    border: 2px solid transparent;
    text-align: center;

    &:hover {
        background-color: ${({ $hoverColor, theme }) => theme.hover[$hoverColor]};
        /* background-color: #f4f7fd; */
        /* border-color: #e0e2e8; */
    }

    &::placeholder {
        color: var(--font-color-placeholder);
        font-size: 1.1em;
    }

    &:focus {
        border-color: var(--color-1);
    }
`;
