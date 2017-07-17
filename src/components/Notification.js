import React from 'react';

export function Notification(props){
    return(
        <div className="notification">
           <img src="https://placeholdit.co//i/50x50?&text=Picture" alt='logo'/>
           <div className="message"><p>{props.message}</p>
           </div>

        </div>
    )
}
export default Notification;
