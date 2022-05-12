import React from 'react';

const popupWrapper = {
    width:`100%`,
    height:`100vh`,
    position:`fixed`,
    top:`0`,
    left:`0`,
    backgroundColor:`#fefbd8`,
}

const popupContainer = {
    display:`flex`,
    justifyContent:`center`,
    alignItems: `center`,
    backgroundColor:`white`,
    width:`60%`,
    height:`60vh`,
    margin:`0 auto`,
}

const popupBtn = {
    position:`absolute`,
    right:`16px`,
    top: `16px`,
}

// const popUpStyles = {
//     textAlign:'center',
// }

// jedyny sposób na stylowanie WrapperComponentów u nas Welcome aby nie ruszać oryginalnego komponentu to otaczanie go innymi tagami i stylowanie ich?

const withPopup = (WrappedComponent) => {
    return class PopUp extends React.Component {
        render() {
            const { isDisplay,handleClick} = this.props;
            if(isDisplay) {
                return (
                    <div style={popupWrapper}>
                        <button style={popupBtn} onClick={handleClick}>X</button>
                        <div style={popupContainer}>
                            <WrappedComponent {...this.props}/>
                        </div>
                    </div>
                )
            }
            return <WrappedComponent/>
        }
    }
}

export default withPopup;