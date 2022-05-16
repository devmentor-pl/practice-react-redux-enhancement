import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { loadTopics } from "./stack.actions";

const Stack = () => {
    const topicsList = useSelector(store=>store.topics);
    const [inputTopic, setInputTopic] = useState('');
    const dispatch = useDispatch();
    console.log('topicsList', topicsList);
    console.log('topicsList.items', topicsList.items);

    const handleShowTopic = (e)=>{
        e.preventDefault();
        dispatch(loadTopics(inputTopic));
        setInputTopic('');
    }

    const renderTopicsList = () => {
        return Object.keys(topicsList).map(items => {
            return Object.keys(items).map(item => {
                return (
                    <div>
                    object Title: {item}
                    </div>
                )
            })
        })
    }

    // const renderTopicsList = () => {
    //     return Object.keys(topicsList.items).map(items => {
    //         return items.map(item => {
    //             return (
    //                 <div>
    //                 object Title: {item.title}
    //                 </div>
    //             )
    //         })
    //     })
    // }


    // const renderTopicsList = () => {
    //     return topicsList.map(items => {
    //         return items.map(level => <li>{level.item}</li> )
    //     } )
    // }

    // const renderTopicItem = items => {
    //     return items.map(item => {
    //         return (
    //             <li>{item.title}</li>
    //         )
    //     })
    // }

    return (
        <>
            <p>Wpisz poszukiwany temat</p>
                <form>
                    <div>
                        <input type='text' placeholder='react redux' value={inputTopic} onChange={e => setInputTopic(e.target.value)}/>
                        <button onClick={handleShowTopic}>WYŚWIETL</button>
                    </div>
                    {/* <div>
                        <input type='text'/>
                        <button onClick={handleFilterRepo}>FILTRUJ</button>
                    </div> */}
                </form>
                <p>Ansewer List:</p>
                <div>
                    <ol>
                        {renderTopicsList()}
                    </ol>
                </div>
        </>
    )
}

export default Stack;