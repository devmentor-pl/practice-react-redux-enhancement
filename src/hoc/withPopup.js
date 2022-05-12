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

const popUpStyles = {
    textAlign:'center',
}

// jak rozdzielić style aby w popup np teksty był na środku bez modifikowania komponentu Welcome? 
// probuje ze zmiennymi i dodanie style={popUpStyles} lub {...popUpStyles} ALE nie działa bo musiałabym sie dobrac do h1, jest na to sposób?

const withPopup = (WrappedComponent) => {
    return class PopUp extends React.Component {
        render() {
            const { isDisplay,handleClick} = this.props;
            if(isDisplay) {
                return (
                    <div style={boxStyles}>
                        <button style={btnStyles} onClick={handleClick}>X</button>
                        <WrappedComponent {...this.props}/>
                    </div>
                )
            }
            return <WrappedComponent/>
        }
    }
}

export default withPopup;