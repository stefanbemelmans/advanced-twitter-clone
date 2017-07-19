
import React from 'react';
import Message from './Message.js';
import Notifications from './Notifications.js';
import Notification from './Notification.js';

export default class Body extends React.Component {
    constructor(props) {
        super();
        this.state = { message: ''}
    }
    newMsg(newState) {
        this.setState({message: newState})
    }
    render(){
    return (
        <div className="body">
            <h1>All the cool Body stuff</h1>
            <h3>This cool thing Happened:</h3>
            <p> And we're gonna talk about it here</p>
            <p>Lorem Ipmsum and all that</p>
            <br />
            <img src="https://placeholdit.co//i/200x200?&text=Picture" alt="logo" />
            <div> <Message callBack={ (newState) => this.newMsg(newState) } />  
             
             </div>
             <Notifications>
                 <Notification message={this.state.message} />
              </Notifications>
        </div>);
    }
}   
