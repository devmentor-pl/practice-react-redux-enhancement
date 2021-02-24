import styled from 'styled-components';

const StyledInput = styled.input`
    width: 250px;
    height: 30px;
    font-size: 1.3em;
    border-radius: 1em;
    border: none;
    outline: none;
    padding: 10px;
    &:active {
        outline: none;
    }
`;

export default StyledInput;
