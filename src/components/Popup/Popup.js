import React from 'react';
import { PopupStyledContainer, CloseButton } from './Popup.styled';

const Popup = ({ handleClose, popupStyles, children }) => {
  return (
    <PopupStyledContainer style={popupStyles}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      {children}
    </PopupStyledContainer>
  );
};

export default Popup;
