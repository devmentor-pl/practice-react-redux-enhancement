import React, { useState } from 'react';
import styled from 'styled-components';


const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const PopupWindow = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: relative;
    min-width: 300px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

function withPopup(Component) {
    return function WrappedComponent({ handleClose, ...props }) {
        const [isOpen, setIsOpen] = useState(true);

        const handleCloseClick = () => {
            setIsOpen(false);
            if (handleClose) {
                handleClose();
            }
        };

        return (
            <>
              {isOpen && (
                <PopupOverlay>
                  <PopupWindow>
                    <CloseButton onClick={handleCloseClick}>X</CloseButton>
                    <Component {...props} />
                  </PopupWindow>
                </PopupOverlay>
              )}
            </>
          );
    }
}

export default withPopup;