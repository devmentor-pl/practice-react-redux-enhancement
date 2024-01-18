import React from 'react';

import { StyledPopup, StyledButton } from './Popup.styled';

function Popup({ toggle, children, color, isOpen }) {
    return (
        <StyledPopup color={color} onClick={toggle} open={isOpen}>
            <div className='popup-content' onClick={e => e.stopPropagation()}>
                <StyledButton className='close-button' onClick={toggle}>
                    &times;
                </StyledButton>
                {children}
            </div>
        </StyledPopup>
    );
}

export default Popup;
