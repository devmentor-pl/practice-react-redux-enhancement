import React, { useState } from 'react';
import Popup from '../components/Popup/Popup';
import theme from '../components/styles/theme';

const withPopup = (popupStyles) => (WrappedComponent) => {
  const WithPopup = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
      setIsVisible(false);
    };

    return (
      <>
        {isVisible && (
          <Popup handleClose={handleClose} popupStyles={theme[popupStyles]}>
            <WrappedComponent {...props} />
          </Popup>
        )}
        {!isVisible && <WrappedComponent {...props} />}
      </>
    );
  };

  return WithPopup;
};

export default withPopup;
