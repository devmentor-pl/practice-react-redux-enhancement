import React from 'react';

class PopUp extends React.Component {
    render() {
        const { display, style, message, cursor, onClick } = this.props;
        return (
            <div style={ display ? style : null }>
                { message }
                <button onClick={ onClick } style={ display ? { cursor } : { display: 'none' } }>x</button>
            </div>
        );
    };
};

export default PopUp;