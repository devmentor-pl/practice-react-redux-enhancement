import React from 'react';

const myStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,.9)'
}

// tak wiem - wygląda okropnie :D

const withPopup = message => {
    return WrappedComponent => {
        return class extends React.Component {
            render() {
                if(message) {
                    return <WrappedComponent style={ myStyles } message={ message } { ...this.props } />
                }
                return null;
            }
        }
    }
}

export default withPopup;