import React from 'react';
import styled from 'styled-components';

function Header({ children }) {
    return <StyledHeader>{children}</StyledHeader>;
}

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

export default Header;
