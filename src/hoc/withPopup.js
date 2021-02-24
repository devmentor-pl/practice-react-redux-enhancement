import React from 'react';

const withPopup = (bgColor, opacity) => {
    return function (WrappedComponent) {
        return class Appearance extends React.Component {
            render() {
                const styledPopup = {
                    backgroundColor: bgColor,
                    opacity: opacity,
                    position: 'absolute',
                    padding: '2rem',
                    left: '50%',
                    top: '50%',
                };
                const { isPopUpActive, setIsPopUpActive } = this.props;
                console.log('🚀 ~ render ~ setIsPopUpActive', setIsPopUpActive);
                console.log('🚀 ~ render ~ isPopUpActive', isPopUpActive);

                return (
                    <div style={styledPopup}>
                        <button
                            onClick={() => togglePopUp()}
                            style={{ float: 'right' }}
                        >
                            x
                        </button>
                        <WrappedComponent />
                    </div>
                );
            }
        };
    };
};

export default withPopup;
