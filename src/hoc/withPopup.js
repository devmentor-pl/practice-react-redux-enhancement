import React, { useState } from "react";

const withPopup = (
  popupBackgroundColor = "#fff",
  overlayOpacity = 0.7
) => WrappedComponent => {
  return props => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <div
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            background: `rgba(0, 0, 0, ${overlayOpacity})`,
            transition: "all 0.3s linear",
            visibility: isOpen ? "visibility" : "hidden",
            opacity: isOpen ? "1" : "0",
          }}
        >
          <div
            style={{
              margin: "100px auto",
              padding: "20px",
              background: popupBackgroundColor,
              borderRadius: "5px",
              width: "30%",
              position: "relative",
            }}
          >
            <a
              href="#"
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                transition: "all 200ms",
                fontSize: "30px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "#333",
              }}
              onClick={() => setIsOpen(false)}
            >
              &times;
            </a>
            <div>
              <WrappedComponent {...props} />
            </div>
          </div>
        </div>

        {!isOpen && <WrappedComponent {...props} />}
      </>
    );
  };
};

export default withPopup;
