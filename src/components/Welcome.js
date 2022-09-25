import React from 'react';

const Welcome = props => {
    const text = 'Witamy na naszej stronie!'
    let result = null
    const {pop, textPop} = props
    return (
        <div>
        {pop ? result = confirm(textPop) : null}
        {
        result 
        ? <h1>{text}</h1> 
        : <h1>Szkoda, że dajesz - Anuluj, spróbuj jeszcze raz</h1>
        }
            
        </div>        
    )
}

export default Welcome;

