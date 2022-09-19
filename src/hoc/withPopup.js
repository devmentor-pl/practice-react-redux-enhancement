import React from 'react';

// const withPopup = (PopComponent) => {
//     return props => {
//         console.log(props)
//         return (
//             <PopComponent 
//                 {...props}
//             />
//         )
//     }
// }

const withPopup = (PopComponent) => {
    return (props) => (
            <PopComponent 
                {...props}
            />
        )
}


export default withPopup;