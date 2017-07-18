import React, { Component } from 'react';
import Notification from './Notification.js';
import './Message.js';

let msg;

export default class Notifications extends React.Component{
  constructor(props) {
    super();
    
    function renderNote(message){
      msg = message;
    }
  }
  render(){ 
    //need to intialize notifications state and notification state and pass it on down the line

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
}