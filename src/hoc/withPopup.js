import React, {useState} from 'react';
import { IoIosCloseCircle } from "react-icons/io";
const withPopup = (WrappedComponent) => {
    return (props) => {
        const [showModal, setShowModal] = useState(true)
        const { modalStyles, closedStyles } = props;
        return (
            
            <div style={ showModal ? modalStyles : closedStyles }>
                <WrappedComponent/>
                <IoIosCloseCircle style={{ position: 'absolute', top: '-10%', right: '-5%', cursor: 'pointer'}} size={30} onClick={() => setShowModal(false)}/>
            </div>
        )
    }
}


export default withPopup;