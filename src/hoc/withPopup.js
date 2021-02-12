import React, {useState} from 'react';
import {StyledModal, StyledCloseItem} from '../../02/StyledModal.styled'



const withPopup = (
    ModalColor = "#0000FF",
    ModalOppacity = 0.7

) =>  WrappedComponent => {
        return props => {
        
        const [isOpenModal, setIsOpenModal] = useState(true);

            return (
             <>
                <StyledModal isOpenModal={isOpenModal} >
                  <StyledCloseItem onClick={() => setIsOpenModal(false)}>X</StyledCloseItem>
                </StyledModal>

              {!isOpenModal && <WrappedComponent {...props} />}
             </>
            )

            
        }

 }



export default withPopup;