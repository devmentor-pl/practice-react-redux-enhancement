import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Wrapper({ children, as }) {
    return <StyledWrapper as={as}>{children}</StyledWrapper>;
}

const DefaultStyledWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    min-height: 500px;
    border-radius: 10px;
    box-shadow: 5px 5px 42px 15px rgba(206, 207, 224, 0.95);
    & > * {
        flex: 1;
    }
`;

const StyledWrapper = styled(DefaultStyledWrapper)(({ theme, as }) => theme.wrapper[as]);

Wrapper.propTypes = {
    children: PropTypes.node,
    as: PropTypes.string,
};

export default Wrapper;
