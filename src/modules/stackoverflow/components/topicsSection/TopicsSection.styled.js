import styled, { css } from 'styled-components';

export const StyledTopicsContainer = styled.div`
    background-color: #2a2e31;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    // overflow hidden nie działało
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    ${({ $as }) =>
        $as === 'list' &&
        css`
            display: block;
        `}

    h2 {
        color: #f2740e;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    & > * {
        flex: 1;
    }

    h2 {
        margin-bottom: 0.5rem;
    }

    hr {
        width: 100%;
    }

    p,
    h4 {
        color: #f8f9f9;
    }

    P {
        font-size: 0.8rem;
    }
`;

export const StyledImgContainer = styled.div`
    & img {
        max-width: 150px;
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: start;

    .btn-sort {
        background-color: transparent;
        font-family: 'SFProBold', sans-serif;
        min-width: 180px;
        padding: 0.5rem 0;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            color: #f2740e;
            svg {
                fill: #f2740e;
            }
        }

        svg {
            margin-right: 5px;
        }
    }
`;
