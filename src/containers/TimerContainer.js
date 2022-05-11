import React,{useState,useEffect} from 'react';
import Timer from '../components/Timer';

const TimerContainer = () => {
    const [time, setTime] = useState({
            hours:0,
            minutes:0,
            seconds:0
        }
    )

    useEffect(() => {
        const idInterval = setInterval(()=>{
            setTime(time => {
                if(time.seconds < 59){
                    return {
                        ...time,
                        seconds: time.seconds + 1
                    }
                }
                if(time.seconds >= 59 && time.minutes < 59){
                    return {
                        ...time,
                        seconds: time.seconds = 0,
                        minutes: time.minutes + 1,
                    }
                }
                if(time.minutes >= 59){
                    return {
                        ...time,
                        seconds: time.seconds = 0,
                        minutes: time.minutes = 0,
                        hours: time.hours + 1
                    }
                }
            });
        },1000 )
        return () => {clearInterval(idInterval)};
    },[])

    return (
        <Timer state={time}/>
    )
}

export default TimerContainer;