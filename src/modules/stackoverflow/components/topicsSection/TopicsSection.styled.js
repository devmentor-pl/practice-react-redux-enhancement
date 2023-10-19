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

export const StyledHeader = styled.header`
    /* display: flex; */
    & > * {
        flex: 1;
    }
`;

export const StyledImgContainer = styled.div`
    & img {
        max-width: 150px;
        fill: white;
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    float: right;

    .btn-sort {
        background-color: transparent;
        font-family: 'SFProBold', sans-serif;
        /* border: 1px solid white; */
        min-width: 180px;
        font-size: 1.15rem;
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
