// Tym razem Twoim zadaniem jest utworzenie HOC-a (ang. Higher-Order Component) o nazwie withPopup, który pozwoli opakować komponent w popup. To co przekażemy do naszego HOC-a ma zostać wyświetlone w formie wyskakującego okienka. U nas będzie to komponent <Welcome>.

// Idealnie gdyby można było wpławać na jego wygląd np. kolor tła, przeźroczystać itp.

// Pamiętaj, aby umożliwić użytkownikowi zamknięcie popup-a np. poprzez guzik X. Po jego kliknięciu okienko znika, a jego zawartość wyświetla się w docelowym miejscu - u nas to treść poniżej nagłówka <h2>.


import React, { useState } from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup('#e0e0e0' , '0,5')(Welcome);

const Task02 = () => {

    const [isOpen, close] = useState( true )


    return (
    <section>
        <h2>Task 02</h2>
        <ComponentWithPopup onClick= { close } visible = {isOpen }/>
    </section>
)
    }

export default Task02;

