import React, { Component } from 'react';
import Notification from './Notification.js';
  export default class Notifications extends React.Component {
    constructor (props) {
      super();
      
      let msg;
      function renderNote(note){
        msg = note;
        }
      this.state = {note: msg};
    }
    render(){
      
      return (
        <div class="other"> 
          <Notification note={this.state.note} />
            <h3>{this.state.note}</h3>
            {/* <br />
            <input type="text" id="blurb">Write something clever</input>
            <button type="submit">click</button>
            <br /> */}
            <h1>So how about that</h1>
          
         </div>
            
    )       
  }
}
