import React from 'react';

const withPopup = (step, frames) => {
    return (WrappedComponent) => {

        return class PopUp extends React.Component{
            state = {
                opacity: 0,
                translateX: -50,
                translateY: 0,
            }
            
            componentDidMount() {
                this.opacity = setInterval(() => {
                    this.setState(({opacity}) => { 
                        const nextOpacity = opacity + step; 
 
                        if(nextOpacity < 1) {
                            return {opacity: nextOpacity};
                        } else {
                            clearInterval(this.id);
                            return {opacity: 1 };
                        }
                    });
                }, 1000/frames);
                this.tranformation = setInterval(() => {
                    this.setState(({translateY}) => { 
                        const nextPosition = translateY + 10;
                        if(nextPosition < 200){
                            return {
                                translateY: nextPosition
                            }
                        }
                        else {
                            clearInterval(this.transformation);
                        }
                    });
                });
            }
            
            componentWillUnmount() {
                clearInterval(this.opacity);
            }
            handleClick =() =>{
                this.props.onClose(false)
            }
            render(){
                const {active} = this.props
                if(active) {
                    return (
                        <section style={{ 
                            color: 'white',
                            opacity:this.state.opacity,
                            position: 'absolute',
                            top: "0",
                            left: "50%",
                            transform: `translate(${this.state.translateX}%, ${this.state.translateY}%)`,
                            background: "salmon",
                            transition: 'transform 400ms ease',
                            padding: "20px",
                            }}>
                            <button onClick={this.handleClick}>X</button>
                            <WrappedComponent></WrappedComponent>
                        </section>
                    )
                }
                return <WrappedComponent></WrappedComponent>
            }
        }
}
}


export default withPopup;