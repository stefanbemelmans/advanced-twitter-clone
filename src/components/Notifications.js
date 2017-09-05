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
      const messages = this.props.messages.map((message, i) => { 
        return <Notification message={this.props.message} key={i} />
      })
      return (
        <div id="notify" className="other"> 
           
            
            {messages}
           
            
         </div>
            
    )       
  };
}

