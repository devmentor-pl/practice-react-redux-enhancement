import React from 'react';

import PopUp from '../components/PopUp';

class PopUpContainer extends React.Component {
    state = { display: true }
    turnOff = () => this.setState({ display: false });

    render () {
        return (
            <PopUp { ...this.state } { ...this.props } onClick={ this.turnOff } />
        )
    }
};

export default PopUpContainer;