import React from 'react';
import withPopup from '../hoc/withPopup';
import Welcome from '../components/Welcome';

const styleDiv = {
  position: 'absolute',
  backgroundColor: 'violet',
  borderRadius: '15px',
  minHeight: '100px',
  padding: '10px',
  left: '300px'
}

const styleButton = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '1.3rem'
}

const WelcomeWithPopup = withPopup('Witamy na naszej stronie!')(styleDiv, styleButton)(Welcome)
class WelcomeContainer extends React.Component {
  state =  {
    isLoaded: true
  }

  setIsLoaded = () => {
    this.setState({isLoaded: false})
  }

  render() {
    return <WelcomeWithPopup onClick={this.setIsLoaded} isLoaded={this.state.isLoaded}/>
  }
}


export default WelcomeContainer;