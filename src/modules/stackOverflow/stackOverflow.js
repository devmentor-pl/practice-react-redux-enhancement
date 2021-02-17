

import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadDataAction, getUserAction} from '../stackOverflow/stackOverflow.action'

const StackOverflow = () => {


    const dispatch = useDispatch();
    const user = useSelector(state => state.value);
    const response = useSelector(state => state.response);
    console.log(user)


    const handleSubmit = event => {
        event.preventDefault();
        dispatch(loadDataAction(user));
    
    }


    

    // const renderDataFromApi = () => {
    //     if(response !== 0) {
    //         return renderAllResponse(response)
    //     } else if (response.length === 0){
    //             return <span>no response!</span>
    //             // to chyba nie działa?
    //      }
    // }


    // const renderAllResponse = response=> {
    //     const listResponse = response.map((repo, id) => {
    //         return <li key={id}>{repo}</li>
    //     })
    //     return <ul>{listResponse}</ul>
    // }



    return(
   
        <>
      <h1>search the content of stackOverflow </h1>
         <form onSubmit={ handleSubmit }>
         <input   onChange={ (({target}) => dispatch(getUserAction(target.value))) }
                  value={ user } />
        
                  
         <input type="submit" value="save" />
         {/* {renderDataFromApi()} */}
     
   
         </form>
    
    </>
    )
}

export default StackOverflow;


