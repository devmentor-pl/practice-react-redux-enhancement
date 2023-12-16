import React from 'react';

    const withPopup = (styles) => (WrappedComponent) => {
        return class extends React.Component {
            state = {
                isPopupShow: true,
            }
    
            defaultStyles = {
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                top: '50%',
                left: '50%',
                width: '70vw',
                height: '70vh',
                transform: 'translate(-50%,-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
            }

            btnStyles = {
                position: 'absolute',
                right: 0,
                top: 0,
                padding: '5px 15px',
                margin:'10px'
              }
    
            closePopup = () => {
                this.setState({
                    isPopupShow: false,
                });
            }
    
            render() {
                if (this.state.isPopupShow) {
                    return (
                        <section style={{ ...this.defaultStyles, ...styles }} >
                            <WrappedComponent />
                            <button style={this.btnStyles} onClick={() => this.closePopup()}>X</button>
                        </section >
                    )
                }
    
                return <WrappedComponent />
            }
        }
    }

export default withPopup;