import React from 'react';
// import logo from './logo.svg';
import '../public/twitter.css';
import './App.css';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
// import Notification from './components/Notification.js';
import Notifications from './components/Notifications.js';
// import Message from './components/Message.js';


// import Other from './components/Other.js';



export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      messages: ["How Are Ya?"]
      }
    } 
    msgChange(newMsg){
      console.log(newMsg);
      this.state.messages.push([newMsg])
    }
    
   render(){
     return (
      <div>
        <Header />
            
          
          <div className='flex-grid'>
          <Profile />

          <Body newMsg={(newMsg) => this.msgChange(newMsg)} />
          
           <Notifications messages={this.state.messages} />
            
            
        </div>
      </div>
      )
    }
  }

