import React, {Component} from 'react';
import {transform} from "@babel/core/lib/transform";

const withPopup = () => {
    return (WrappedComponent) => {
        return class extends Component {
            render() {
                const {isVisible, close} = this.props;

                const WelcomeContent = () => {
                    return <> <WrappedComponent /></>
                }

                if(isVisible) {
                    const styles = {
                        position: 'absolute',
                        margin: '0 auto',
                        width: '20vw',
                        padding: '2rem',
                        backgroundColor: 'grey',
                        textAlign: 'center',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }
                    return (
                        <div style={styles}>
                            <WrappedComponent {...this.props} />
                            <button onClick={close}>X</button>
                        </div>
                    )
                }

                return <WelcomeContent />
            }
        }
    }
}


export default withPopup;