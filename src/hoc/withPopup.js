import React from 'react';

const withPopup =
  (message) => (popupStyle, closeButtonStyle) => (WrappedComponent) => {
    return class extends React.Component {
      render() {
        const { isLoaded, setIsLoaded } = this.props;
        if (isLoaded) {
          return (
            <div style={popupStyle}>
              <button style={closeButtonStyle} onClick={setIsLoaded}>
                X
              </button>
              <WrappedComponent {...this.props} />
            </div>
          );
        }
        return <p>{message}</p>;
      }
    };
  };

export default withPopup;
