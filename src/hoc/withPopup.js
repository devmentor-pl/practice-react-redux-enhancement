import React from 'react';

const withPopup = (bgColor, opacity) => {
    return function (WrappedComponent) {
        return class Appearance extends React.Component {
            render() {
                const styledPopup = {
                    backgroundColor: bgColor,
                    opacity: opacity,
                    color: '#E5E4E2',
                    position: 'absolute',
                    padding: '2rem',
                    width: '300px',
                    left: '50%',
                    top: '50%',
                    border: '10px solid #E5E4E2',
                    borderRadius: '2rem',
                };

                const styledButton = {
                    float: 'right',
                    borderRadius: '2rem',
                    border: 'none',
                    outline: 'none',
                    marginBottom: '10px',
                };

                const { isPopUpActive, setIsPopUpActive } = this.props;
                return (
                    <div style={styledPopup}>
                        <button
                            onClick={() => setIsPopUpActive((flag) => !flag)}
                            style={styledButton}
                        >
                            Close
                        </button>
                        <WrappedComponent />
                    </div>
                );
            }
        };
    };
};

export default withPopup;
