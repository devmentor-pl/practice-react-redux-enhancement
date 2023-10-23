import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function List({ children, height }) {
    // console.log(height);

    return <StyledList height={height}>{children}</StyledList>;
}

export const StyledList = styled.ul`
    margin-top: 0.6rem;
    padding: 0 0.2rem;
    // z listą również mam problem,
    // że jest ustawiana na sztywno
    height: calc(100% - ${props => props.height + 'px'});
    /* max-height: 350px; */
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
