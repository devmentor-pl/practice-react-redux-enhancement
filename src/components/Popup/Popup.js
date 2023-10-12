import React from 'react';

import { StyledPopup } from './Popup.styled';

function Popup({ toggle, children, color, isOpen }) {
    return (
        <StyledPopup color={color} onClick={toggle} open={isOpen}>
            <div className='popup-content' onClick={e => e.stopPropagation()}>
                <button className='close-button' onClick={toggle}>
                    &times;
                </button>
                {children}
            </div>
        </StyledPopup>
    );
}

export default Popup;
