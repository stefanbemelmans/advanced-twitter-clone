import React, { Component } from 'react';
import Notification from './Notification.js';
  export default class Notifications extends React.Component {
    constructor (props) {
      super();
      this.state={msg:""};
      this.componentDidMoun//I think this is the key
      function renderNote(note){
       this.setState({msg:note})
        }
    }
      
    render(){
     
      return (
        <div class="other"> 
          {/* <Notification message={this.state.msg} /> */}
            <h3>{this.state.msg}</h3>
            {/* <br />
            <input type="text" id="blurb">Write something clever</input>
            <button type="submit">click</button>
            <br /> */}
            <h1>So how about that</h1>
          
         </div>
            
    )       
  };
}

