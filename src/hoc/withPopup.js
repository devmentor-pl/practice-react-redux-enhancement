import React from 'react';

const withPopup = (styles) => (WrappedComponent) => {
    return class extends React.Component {
        state = {
            open: true,
        }

        defaultStyles = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
        }

        close = () => {
            this.setState({
                open: false,
            });
        }

        render() {
            if (this.state.open) {
                return (
                    <section style={{ ...this.defaultStyles, ...styles }} >
                        <WrappedComponent />
                        <button onClick={() => this.close()}>X</button>
                    </section >
                )
            }

            return <WrappedComponent />
        }
    }
}


export default withPopup;