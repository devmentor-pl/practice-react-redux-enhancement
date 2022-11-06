import React from 'react';

const withPopup = (WrappedComponent) => (background) => (opacity) => {
    return class extends React.Component {
        popupStyles = {            
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '80vw',
            height: '80vh',
            backgroundColor: background || 'lightgray',
            opacity: opacity || '0.7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: "10px",
            border: "1px solid #84817a"
        }

        buttonStyles = {
            position: 'absolute',
            backgroundColor: "#84817a" || 'gray',
            top: 0,
            right: "-1px",
            padding: '5px 12px',
            borderRadius: "10px",
            border: "1px solid #84817a"
        }

        render() {
            const { isOpen, closeWindow } = this.props
            if(isOpen) {
                return (
                    <section style={this.popupStyles}>
                        <WrappedComponent
                            {...this.props}
                        />
                        <button
                            onClick={closeWindow}
                            style={this.buttonStyles}
                        >
                            X                
                        </button>
                    </section>                    
                )
            }

            return <WrappedComponent />
        }
    }    
}

export default withPopup;