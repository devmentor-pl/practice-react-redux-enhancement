import React from 'react';
import styled from 'styled-components';

function List({ children }) {
    return <StyledList>{children}</StyledList>;
}

export const StyledList = styled.ul`
    margin-top: 0.6rem;
    padding: 0 0.2rem;
    max-height: 450px;
    /* height: inherit; */
    height: 100%;
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

export default List;
