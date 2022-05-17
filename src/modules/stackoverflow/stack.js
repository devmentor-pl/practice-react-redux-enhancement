import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { loadTopics,sortDesc,sortAsc } from "./stack.actions";

const tableStyles = {
    width:'200px',
    border:'1px solid grey',
}

const Stack = () => {
    const topicsList = useSelector(store=>store.stack.topics);
    const [inputTopic, setInputTopic] = useState('');
    const [sortType, setSortType] = useState('')
    const dispatch = useDispatch();
    console.log(topicsList);
    console.log(sortType);

    const handleShowTopic = (e)=>{
        e.preventDefault();
        dispatch(loadTopics(inputTopic));
        setInputTopic('');
    }

    useEffect(() => {
        if(sortType === 'desc'){
            dispatch(sortDesc())
        }
        else if(sortType === 'asc') {
            dispatch(sortAsc())
        }
    },[sortType])

    const renderTopicsList = () => {
        return topicsList.map(item => {
            return (
                <>
                    <tr key={item.question_id}>
                        <td>{item.owner.display_name}</td>
                        <td>{item.owner.reputation}</td>
                        <td>{item.creation_date}</td>
                    </tr>
                </>
            )
        })
    }

    return (
        <>
            <p>Wpisz poszukiwany temat</p>
                <form>
                    <div>
                        <input type='text' placeholder='react redux' value={inputTopic} onChange={e => setInputTopic(e.target.value)}/>
                        <button onClick={handleShowTopic}>WYŚWIETL</button>
                    </div>
                    <div>
                        <p>Sortuj reputację uzytkowników</p>
                        <select onChange={e => setSortType(e.target.value)}>
                            <option></option>
                            <option value="desc">Malejąco</option>
                            <option value="asc">Rosnąco</option>
                        </select>
                    </div>
                </form>
                <p>Answer List:</p>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th style={tableStyles}>User Name</th>
                                <th style={tableStyles}>User Reputation</th>
                                <th style={tableStyles}>Creation Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTopicsList()}
                        </tbody>
                    </table>
                </div>
        </>
    )
}

export default Stack;