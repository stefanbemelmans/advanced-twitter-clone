import React, { Component } from 'react';
import Notification from './Notification';
// import Notification from './Notification.js';
  export default class Notifications extends React.Component {
    constructor (props) {
      super(props);
      
      }
      // this.componentDidMount() //I think this is the key
     
    
    // renderNote(note){
    //   this.setState({message: note})
    // }
    
    render(){
      const messages = this.props.messages.map(message => { 
        return <Notification message={this.props.message} key={message} />
      })
      return (
        <div id="notify" className="other"> 
           
            
            {messages}
           
            <h3>"this is supposed to be a message" Or Something</h3> */}
           
            <h1>So how about that! This should be a message soon!</h1>
            <h3>This is ALSO supposed to be a message</h3>
          
         </div>
            
    )       
  };
}

