import React from 'react';

const withPopup = (message) => popupStyle =>WrappedComponent => {
    return class extends React.Component {
        render() {
            const {isLoaded, setIsLoaded} = this.props;
            if (isLoaded) {
                return (
                    <div style={popupStyle}>
                        <WrappedComponent {...this.props}/>
                        <button onClick={setIsLoaded}>x</button>  
                    </div>
                )
            }
                return <p>{message}</p>
        }
    }
}


export default withPopup;