import React,{useState,useEffect} from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(Welcome);

const Task02 = () => {
    const [isDisplay,setIsDisplay] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    console.log(intervalId);

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setIsDisplay(true)
        }, 2000);
        console.log(intervalId);
        return ()=> clearInterval(intervalId);
    },[])

    const handleClick = () => {
        console.log(intervalId);
        setIsDisplay(false);
        setIntervalId(0);
        console.log(intervalId);
    }


    return (
        <section>
            <h2>Task 02</h2>
            <ComponentWithPopup isDisplay={isDisplay} handleClick={handleClick}/>
        </section>
    )
}

export default Task02;

