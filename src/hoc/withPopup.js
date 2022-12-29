import React, { Component } from "react";

const withPopup = (backgroundColor) => {
  return function (WrappedComponent) {
    const contentStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: backgroundColor || "blue",
      width: "500px",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid gray",
      borderRadius: "20px",
    };

    return class extends Component {
      render() {
        const { isOpen, handleClick } = this.props;

        if (isOpen) {
          return (
            <div style={contentStyles}>
              <WrappedComponent {...this.props} />
              <button onClick={handleClick}>X</button>
            </div>
          );
        }
        return <WrappedComponent />;
      }
    };
  };
};

export default withPopup;
