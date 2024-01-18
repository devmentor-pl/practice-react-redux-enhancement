import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import forestWhite from '../../images/forest-svg-white.svg';
import forest from '../../images/forest-svg.svg';

function Error({ renderFetch, variant }) {
    const image = variant === 'dark' ? forestWhite : forest;

    return (
        <StyledContainer $as={variant}>
            <img src={image} alt='forest' />
            <h2>You're lost. Try again.</h2>
            {renderFetch ? <p className='error'>Error! {renderFetch}</p> : <p>Try to rephrase your query</p>}
        </StyledContainer>
    );
}

Error.propTypes = {
    renderFetch: PropTypes.string,
    variant: PropTypes.string,
};

const StyledContainer = styled.div`
    text-align: center;

    img {
        max-width: 150px;
    }

    ${({ $as }) =>
        $as === 'dark' &&
        css`
            background-color: var(--dark-color-2);
            h2 {
                color: var(--dark-color-1);
            }

            p {
                color: var(--dark-color-3);
            }
        `}
`;

export default Error;
