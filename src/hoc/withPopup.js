import React from 'react';

const withPopup =
  ({ overlayStyles = {}, asideStyles = {}, buttonStyles = {} } = {}) =>
  (WrappedComponent) => {
    return class extends React.Component {
      render() {
        const defaultOverlayStyles = {
          backgroundColor: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(2px)",
          height: "100vh",
          left: "50%",
          position: "fixed",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
        };
        const defaultAsideStyles = {
          backgroundColor: "#fff",
          borderRadius: "10px",
          left: "50%",
          padding: "2rem",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
        };
        const defaultButtonStyles = {
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
          position: "absolute",
          right: "5px",
          top: "5px",
        };

        const { isOpen, onClose } = this.props;

        if (isOpen) {
          return (
            <>
              <div
                style={{ ...defaultOverlayStyles, ...overlayStyles }}
                onClick={onClose}
              />
              <aside style={{ ...defaultAsideStyles, ...asideStyles }}>
                <WrappedComponent />
                <button
                  style={{ ...defaultButtonStyles, ...buttonStyles }}
                  onClick={onClose}
                >
                  x
                </button>
              </aside>
            </>
          );
        }
        return <WrappedComponent />;
      }
    };
  };


export default withPopup;