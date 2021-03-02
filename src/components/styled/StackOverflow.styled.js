import styled from 'styled-components';

const StyledStackOverflow = styled.div`
    display: flex;
    width: 650px;
    height: 35px;
    padding: 1.5em;
    align-items: center;
    background-color: #dcdcdc;
    border: 1px solid black;
    border-radius: 2px;
    & input {
        padding-left: 20px;
        width: 400px;
        margin-left: 20px;
        &::placeholder {
            opacity: 0.5;
        }
    }
`;

export default StyledStackOverflow;
