import React from 'react';

const boxStyles = {
    border:'1px solid grey',
    position:`fixed`,
    top:`0`,
    left:`0`,
    width:`100%`,
    height:`100vh`,
    backgroundColor:`#fefbd8`,
}

const btnStyles = {
    position:`absolute`,
    right:`16px`,
    top: `16px`,
}


const withPopup = (WrappedComponent) => {
    return class PopUp extends React.Component {
        render() {
            const { isDisplay,handleClick } = this.props;
            if(isDisplay) {
                return (
                    <div style={boxStyles}>
                        <button style={btnStyles} onClick={handleClick}>X</button>
                        <WrappedComponent {...this.props}/>
                    </div>
                )
            }
            return <div>Closed up</div>
        }
    }
}

export default withPopup;