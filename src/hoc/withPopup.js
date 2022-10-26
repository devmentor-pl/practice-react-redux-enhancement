import React from "react";

const withPopup = () => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isOpen, closeWindow } = this.props;
      if (isOpen) {
        return (
          <div
            style={{
              backgroundColor: "lightgrey",
              borderRadius: "5px",
              margin: "0 auto",
              width: "20%",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <WrappedComponent>
              <button onClick={closeWindow}>X</button>
            </WrappedComponent>
          </div>
        );
      }
      return <WrappedComponent />;
    }
  };
};

export default withPopup;
