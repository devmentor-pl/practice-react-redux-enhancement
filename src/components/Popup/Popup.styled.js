import styled from 'styled-components';

export const PopupStyledContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  ${(props) => props.style}
`;

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
`;
