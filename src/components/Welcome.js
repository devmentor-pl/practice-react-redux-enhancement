import React from 'react';

const Welcome = ({children}) => {
    return (
        <>
            <h1>Witamy na naszej stronie!</h1>
            {children}
        </>
    )
}

export default Welcome;

