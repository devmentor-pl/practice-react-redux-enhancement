import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadData } from '../stack.actions';
import Stack from '../components/Stack';

const StackContainer = () => {
    const [ text, setText ] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(data => data.stack.items);
    const formHandler = e => {
        e.preventDefault();
        dispatch(loadData(text));
    }

    const list = data.map((el, i ) => {
        return <div key={ `link-${ i }`}><a href={ el.link }>{ el.title }</a> by { el.owner.display_name } </div>
    });

    return <Stack 
            text= { text }
            list={ list } 
            setText={ setText } 
            onSubmit={ formHandler } 
            />;
};

export default StackContainer;