import React from 'react';
import Notification from './Notification.js';
import './Message.js';

let msg;
export function renderNote(message){
  msg = message;
}
export function Notifications(props) {
 
    return (
        <div class="other"> 
          <Notification message={props} />
            <h3>{msg}</h3>
            {/* <br />
            <input type="text" id="blurb">Write something clever</input>
            <button type="submit">click</button>
            <br /> */}
            <h1>So how about that</h1>
          
         </div>
            
    )       
}
  export default Notifications;