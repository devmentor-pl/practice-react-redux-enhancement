import React from 'react';

class Timer extends React.Component {
    
    render() {
        console.log(this.props)
        const {
            getHours,
            getMinutes,
            getSeconds,
        } = this.props

        return (

            // solution 1
            // -----------
            // <section>
            //     Dziękujemy, że jesteś z nami już 
            //     {' '}{getHours()} h 
            //     {' '}{getMinutes()} m 
            //     {' '}{getSeconds()} s.
            // </section>

            // solution 2
            // -----------
            <section>
                Dziękujemy, że jesteś z nami już 
                {' '}{getHours} h 
                {' '}{getMinutes} m 
                {' '}{getSeconds} s.
            </section>
        )
    }
}

export default Timer;