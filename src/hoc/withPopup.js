import React from 'react';

const withPopup = function(background, opacity) {
    return function(WrappedComponent) {
        return class extends React.Component {
            render() {
                const Popup = () => {
                    const style = {
                        backgroundColor: background,
                        opacity: opacity,
                        width: '300px',
                        textAlign: 'center',
                        position: 'absolute',
                        top: '50vh',
                        left: '50vw'
                    }
                    return (
                        <div style={ style }>
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