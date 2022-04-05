import React from 'react';
import Welcome from '../components/Welcome';
import withPopup from '../hoc/withPopup';

const popupStyle = {
  backgroundColor: 'navy',
  color: 'white',
  fontFamily: 'sans-serif',
  left: '50%',
  padding: '10px',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%,-50%)',
};

const closeButtonStyle = {
  backgroundColor: 'white',
  border: 'none',
  position: 'absolute',
  right: 0,
  top: 0,
};

const WelcomeWithPopup = withPopup('Witamy na naszej stronie!')(
  popupStyle,
  closeButtonStyle
)(Welcome);
class WelcomeContainer extends React.Component {
  state = {
    isLoaded: true,
  };

  setIsLoaded = () => {
    this.setState({ isLoaded: false });
  };

  render() {
    return (
      <WelcomeWithPopup
        setIsLoaded={this.setIsLoaded}
        isLoaded={this.state.isLoaded}
      />
    );
  }
}

export default WelcomeContainer;
