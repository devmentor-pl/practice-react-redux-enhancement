import React, {Component} from 'react';

const withPopup = () => {
    return (WrappedComponent) => {
        return class extends Component {
            render() {
                const {isVisible, close} = this.props;

                const WelcomeContent = () => {
                    return <> <WrappedComponent /></>
                }

                if(isVisible) {
                    const style = {
                        position: 'absolute',
                        margin: '0 auto',
                        width: '20vw',
                        padding: '4rem',
                        backgroundColor: '#85a4c9',
                        textAlign: 'center',
                        top: '30%',
                        left: '40%',
                    }
                    return (
                        <div style={style}>
                            <WrappedComponent {...this.props} />
                            <button onClick={close}>Zamknij X</button>
                        </div>
                    )
                }

                return <WelcomeContent />
            }
        }
    }
}


export default withPopup; 