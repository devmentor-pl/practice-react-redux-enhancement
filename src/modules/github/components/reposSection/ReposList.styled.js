import styled, { css } from 'styled-components';

export const StyledReposWrapper = styled.div`
    background-color: var(--color-2);
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // overflow hidden nie działało
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    ${({ $as }) =>
        $as === 'list' &&
        css`
            display: block;
        `}
`;

export const StyledImgContainer = styled.div`
    & img {
        max-width: 150px;

        ${({ $as }) =>
            $as === 'circle' &&
            css`
                border-radius: 50%;
                max-width: 80px;
                border: 3px solid white;
                box-shadow: var(--box-shadow);
            `}
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    gap: 1em;
    align-items: center;
    margin-bottom: 1.5rem;

    h2 {
        margin-bottom: 0.15em;
    }

    p {
        color: var(--font-color);
    }
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

        &:hover {
            background-color: #fff;
        }

        &::placeholder {
            color: var(--font-color-placeholder);
            font-size: 1.1em;
        }

        &:focus {
            border-color: var(--color-1);
        }
    }
`;

export const StyledReposList = styled.ul`
    margin-top: 1.75em;
    padding: 0 0.2em;
    max-height: 350px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.3em;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--font-color-placeholder);
        border-radius: 100vw;
    }
`;
