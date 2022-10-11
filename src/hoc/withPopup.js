import React from 'react';

const withPopup = () => (WrappedContainer) => (props) => {
    const { popupIsOpen, closePopup } = props;
    if (popupIsOpen) {
        return (
            <div>
                <WrappedContainer>
                    <button onClick={()=>closePopup()}>Close</button>
                </WrappedContainer>
            </div>
        )
    }
    return (
        <WrappedContainer/>
    )

}

export default withPopup;