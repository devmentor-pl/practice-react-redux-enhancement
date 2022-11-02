import React from 'react';

const Stack = ({ text, list, setText, onSubmit }) => {
    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Type text"
                    value={ text }
                    onChange={ e => setText(e.target.value) } 
                />
                <input type="submit" />
            </form>
            <section>
                { list }
            </section>
        </>
    )
};

export default Stack;