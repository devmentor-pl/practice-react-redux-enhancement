import React from 'react';
import Popup from '../components/Popup';

const withPopup = function () {
    return function (Welcome) {
        return class extends React.Component {
            state = { isPopupActive: true }

            closeHandle = () => {
                this.setState({ isPopupActive: !this.state.isPopupActive })
            }
            render() {
                if (this.state.isPopupActive) {
                    return (
                        <Popup onClose={this.closeHandle}>
                            <Welcome />
                        </Popup>
                    )
                } else return < Welcome />
            }
        }
    }
}

export default withPopup;