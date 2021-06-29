import styled from 'styled-components';


export const StyledModal= styled.div`
position: fixed;
top: 50px;
left: 250px;
width: 400px;
height: 400px;
background-color: white;
border: 2px solid green;
visibility:  ${props => props.isOpenModal ? "visibility" : "hidden"};
opacity:  ${props => props.isOpenModal ? "1" : "0.6"};


`;
/* Czemu to nie działa?źle przekazałam? */
/* border: 2px solid  ${ModalColor};
background: ${ModalColor}; */

export const StyledCloseItem = styled.button`
color: red;
font-size: 30px;
background-color:white;
border: none;
  
`;

