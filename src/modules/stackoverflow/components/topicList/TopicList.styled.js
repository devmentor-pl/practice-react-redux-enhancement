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

    p,
    h4 {
        color: #f8f9f9;
    }

    svg {
        fill: white;
    }
`;

export const StyledHeader = styled.header``;

export const StyledImgContainer = styled.div`
    & img {
        max-width: 150px;
        fill: white;
    }
`;
