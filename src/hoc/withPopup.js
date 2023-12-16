import React from 'react';

const withPopup = (styles) => (WrappedComponent) => {
    return class extends React.Component {
        state= {
            open: true
        }
        
        defaultStyles = {
            position: 'absolute',
            top: 100,
            left: 100,
            right: 100,
            bottom: 100,
            background: 'blue',
            opacity: 0.7,
            textAlign: 'center'
        }

        close = () => {
            this.setState({
                open: false
            })
        }


        render() {
            if(this.state.open) {
                return (
                <section style={{...this.defaultStyles, ...styles}}>
                        <WrappedComponent/>
                        <button onClick={() => this.close()}>X</button>
                    </section>
                    )
                }
            return (
                <section><WrappedComponent/></section>
            )
                
        }
    }
}


export default withPopup;