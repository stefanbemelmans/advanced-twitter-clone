import React, { Component } from 'react';
import Notification from './Notification.js';
  export default class Notifications extends React.Component {
    constructor (props) {
      super();
      // this.componentDidMount() //I think this is the key
     
    }
    // renderNote(note){
    //   this.setState({message: note})
    // }
    
    render(){
     
      return (
        <div id="notify" class="other"> 
           {/* <Notification message={this.state.message} />  */}
            <h3>{this.props.message} Or Something</h3> */}
            {/* <br />
            <input type="text" id="blurb">Write something clever</input>
            <button type="submit">click</button>
            <br /> */}
            <h1>So how about that! This should be a message soon!</h1>
            <h3>{this.props.message}</h3>
          
         </div>
            
    )       
  };
}

