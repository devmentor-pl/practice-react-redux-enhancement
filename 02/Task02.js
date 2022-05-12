import React,{useState,useEffect} from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(Welcome);

const Task02 = () => {
    const [isDisplay,setIsDisplay] = useState(false);
    const [intervalId, setIntervalId] = useState(0);

    useEffect(()=> {
        const timerId = setInterval(() => {
            setIsDisplay(true);
            setIntervalId(timerId)
        }, 2000);

        return ()=> clearInterval(timerId);
    },[])

    const handleClick = () => {
        setIsDisplay(false);
        clearInterval(intervalId);
    }

    return (
        <section>
            <h2>Task 02</h2>
            <ComponentWithPopup isDisplay={isDisplay} handleClick={handleClick}/>
        </section>
    )
}

export default Task02;

