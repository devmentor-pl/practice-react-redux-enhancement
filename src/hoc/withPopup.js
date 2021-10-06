import React from 'react';

const withPopup = function(background, opacity) {
    return function (WrappedComponent) {
        return class extends React.Component {
            render() {
                const Popup = () => {
                const style = { 
                    backgroundColor: background,
                    opacity: opacity,
                    width: '250px',
                    height: '140px',
                    borderRadius: '50px',
                    color: '#6d6464',
                    textAlign: 'center',
                    paddingTop: '20px',
                 } 
                 return (
                    <div style = { style }>
                        <WrappedComponent/>
                        <button onClick={() => this.props.onClick( false )}>X</button>
                    </div> 
                 )
                }
                return (
                    this.props.visible ? <Popup/> : <WrappedComponent/>
                )
            }
        }
    }
}
  
export default withPopup;