import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuery, updateOrder, getQuestions } from './stackoverflow.actions'
import StackoverflowAPI from './stackoverflow.api'
import StackoverflowStyledComponent from './stackoverflow.styled'

const StackoverflowComponent = () => {
    const query = useSelector( state => state.stackoverflow.query )
    const questions = useSelector( state => state.stackoverflow.questions )
    const order = useSelector( state => state.stackoverflow.order )
    const dispatch = useDispatch()
    const api = new StackoverflowAPI()
 
    const getData = () => {
        api.getQuestions(query)
        .then(questions => dispatch(getQuestions(questions)))
        .catch(e => console.log(e.message))
    }

    const SortedData = (order) => {
        const sortedQuestions = JSON.parse(JSON.stringify(questions))
        if(order==='date') {
            sortedQuestions.sort((a,b) => (a.creation_date - b.creation_date))
            
        } else {
            sortedQuestions.sort((a,b) => (a.owner.reputation - b.owner.reputation))
        }

        return sortedQuestions.map(question => {
            return <li key={ question.question_id }>{ question.title }</li>
        })
    }

    return (
        <StackoverflowStyledComponent>
            <label>Query:</label>
            <input type="text" onChange={e => dispatch(updateQuery(e.target.value))}/>
            <button onClick={ () => getData() }>Search</button><br/>
            <label>Sort by:</label>
            <input type="radio" id="date" name="sorting" onClick={() => dispatch(updateOrder('date')) }  defaultChecked/>
            <label htmlFor="date">Date</label>
            <input type="radio" id="reputation" name="sorting" onClick={() => dispatch(updateOrder('reputation')) }/>
            <label htmlFor="reputation">Reputation</label>
            <h4>Questions: </h4>
            <ul>
                { SortedData(order) }
            </ul>
        </StackoverflowStyledComponent>
    )
}

export default StackoverflowComponent