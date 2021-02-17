

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadDataAction, getTitleAction} from '../stackOverflow/stackOverflow.action'

const StackOverflow = () => {
    const dispatch = useDispatch();
    const {title, response} = useSelector(state => state.stackoverflow)


    // const title = useSelector(state => state.value);
    // const response = useSelector(state => state.response);



    const handleSubmit = event => {
        event.preventDefault();
        dispatch(loadDataAction(title));
    }


  const renderResponse = response => {
    const allResponse = response.map((response) => showResponse(response));
    return <>{allResponse}</>
  }

  const showResponse = (response) => {
    
   const {title, link} = response;
    return(
        <ul>
            <li><a href={link}>{title}</a></li> 
        </ul>
    )
}

    return(
        <>
         <h1>search the content of stackOverflow </h1>
         <form onSubmit={ handleSubmit }>
         <input   onChange={ (({target}) => dispatch(getTitleAction(target.value))) }
                  value={ title }
                  placeholder="enter the title e.g. error 404" 
        />
        {/* <label>
			   Sort by:
			   <select 
               name="sort"
               onChange={ (({target}) => dispatch(getTitleAction(target.value))) }
			   >					
			   	<option value='activity'>activity</option>
			   	<option value='creation'>creation</option>
			   	<option value='votes'>votes</option>
			   	<option value='relevance'>relevance</option>
			   </select>
	    </label>
         */}
                  
         <input type="submit" value="save" />

         {renderResponse(response)}
     
         </form>
    
        </>
    )
}

export default StackOverflow;


