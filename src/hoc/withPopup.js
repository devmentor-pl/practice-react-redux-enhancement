import React from 'react';

const withPopup = (bgColor, opacity) => {
    return function (WrappedComponent) {
        return class Appearance extends React.Component {
            state = {
                backgroundColor: bgColor,
                opacity: opacity,
            };

            render() {
                const styledPopup = {
                    backgroundColor: 'green',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                };

                return (
                    <div style={styledPopup}>
                        <button style={{ float: 'right' }}>x</button>
                        <WrappedComponent {...this.props} />
                    </div>
                );
            }
        };
    };
};

export default withPopup;
