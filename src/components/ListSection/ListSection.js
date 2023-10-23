import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function ListSection({ variant, as, children }) {
    return (
        <StyledListSection $variant={variant} $as={as}>
            {children}
        </StyledListSection>
    );
}

ListSection.propTypes = {
    variant: PropTypes.string,
    as: PropTypes.string,
    children: PropTypes.node,
};

const StyledListSection = styled.div`
    background-color: ${({ $variant }) => ($variant === 'dark' ? 'var(--dark-color-2)' : 'var(--color-2)')};
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    // overflow hidden nie działało
    // background color i radius jest ustawiony na rodzica (Wrapper)
    // tutaj miałem kanciaste boki
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    ${({ $as }) =>
        $as === 'list' &&
        css`
            display: block;
        `}

    ${({ $as }) =>
        $as === 'centre' &&
        css`
            display: flex;
            align-items: center;
            justify-content: center;
        `}
`;

export default ListSection;
