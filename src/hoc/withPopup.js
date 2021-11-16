import React from "react";

const withPopup = function (openButtonText, backgroundColor, border) {
    return function (WrappedComponent) {
        return class extends React.Component {
            render() {
                const { isOpen, toggleModal } = this.props;
                if (isOpen) {
                    return (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                width: "300px",
                                backgroundColor: backgroundColor,
                                border: border,
                            }}
                        >
                            <WrappedComponent {...this.props} />
                            <button onClick={toggleModal}>x</button>
                        </div>
                    );
                }
                return <button onClick={toggleModal}>{openButtonText}</button>;
            }
        };
    };
};

export default withPopup;
