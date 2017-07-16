import React, { Component }  from 'react';
import Notification from './Notification.js'

export function renderNote(message){
  return (<Notification message={message} />)
}
export function Notifications(props) {
    return (
        <div class="other"> 
            <h3>{props.message}</h3>
            {/* <br />
            <input type="text" id="blurb">Write something clever</input>
            <button type="submit">click</button>
            <br /> */}
            <h1>So how about that</h1>
           <Notification message={props.message} /> 
         </div>
            
    )       
}
  export default Notifications;