import React from 'react';

const withPopup = (bgColor, opacity) => {
    return function (WrappedComponent) {
        return class Appearance extends React.Component {
            state = {
                backgroundColor: bgColor,
                opacity: opacity,
            };

            render() {
                const style = this.state;
                return (
                    <WrappedComponent style={{ style }}>ss</WrappedComponent>
                );
            }
        };
    };
};

export default withPopup;
