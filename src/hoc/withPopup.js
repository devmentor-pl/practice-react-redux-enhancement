import React from 'react';

import Popup from '../components/Popup';

const withPopup = function (theme) {
    return function (WrappedComponent) {
        return class PopupEnhanced extends React.Component {
            render() {
                const { isOpen, togglePopup } = this.props;

                if (isOpen) {
                    return (
                        // nie wiem, dalczego, ale jeżeli użyję variant zamiast kolor mam info w konsoli, że variant to jest unknown prop
                        <Popup toggle={togglePopup} color={theme} isOpen={isOpen}>
                            <WrappedComponent />
                        </Popup>
                    );
                }

                return <WrappedComponent />;
            }
        };
    };
};

export default withPopup;
