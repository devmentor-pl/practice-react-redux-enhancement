import React from 'react';

const withPopup = (message) => (styleDiv, styleButton) => WrappedComponent => {
        return class extends React.Component {
            render() {
                const {isLoaded, onClick}= this.props
                if(isLoaded) {
                    return (
                        <div style={styleDiv}>
                            <button style={styleButton} onClick={onClick}>X</button>
                            <WrappedComponent {...this.props}/>
                        </div>
                )
            }
            return  <section> {message} </section>;
        }
            
    }
}

export default withPopup;
