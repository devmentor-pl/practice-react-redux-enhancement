import React from 'react';
import Welcome from '../components/Welcome';
import withPopup from '../hoc/withPopup';

const popupStyle = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(100,100,100, 0.9)',
}

const WelcomeWithPopup =  withPopup('Witamy na naszej stronie!')(popupStyle)(Welcome);
class WelcomeContainer extends React.Component {
    state  = {
        isLoaded: true,
    }

    setIsLoaded = () => {
        this.setState({isLoaded: false})
    }

    render() {
        return <WelcomeWithPopup setIsLoaded={this.setIsLoaded} isLoaded ={this.state.isLoaded}/>
    }
}

export default WelcomeContainer;
