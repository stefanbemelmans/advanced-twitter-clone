import React from 'react';
import logo from './logo.svg';
import '../public/twitter.css';
import './App.css';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Notification from './components/Notification.js';
import Notifications from './components/Notifications.js';
import Message from './components/Message.js';


// import Other from './components/Other.js';



export default class App extends React.Component{
  constructor(props){
    super();
    this.state ={
      message: "How Are Ya?"
      }
    } 

    
   render(){
     return (
      <div>
        <Header />
            
          
          <div className='flex-grid'>
          <Profile />

          <Body>
            <Message />
          </Body>
          
          <Notifications>
            <Notification message={this.state.message} />
           </Notifications> 
          
        </div>
      </div>
      )
    }
  }

