import React from 'react'

const withPopup = (WrapperComponent) => (background) => (opacity) => {
  return class Popup extends React.Component {
    popupStyles = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '80vw',
      height: '80vh',
      backgroundColor: background || 'gray',
      opacity: opacity || '0.7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    buttonStyles = {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: '3px 12px',
    }

    state = {
      ShowPopup: true,
    }

    hidePopup = () => {
      this.setState({ ShowPopup: false })
    }

    render() {
      if (this.state.ShowPopup) {
        return (
          <section style={this.popupStyles}>
            <WrapperComponent />
            <button style={this.buttonStyles} onClick={this.hidePopup}>
              X
            </button>
          </section>
        )
      }

      return <WrapperComponent />
    }
  }
}

export default withPopup
