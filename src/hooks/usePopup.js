import { useState, useEffect } from 'react';

function usePopup() {
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }

        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, [isPopupOpen]);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return { isPopupOpen, togglePopup };
}

export default usePopup;
