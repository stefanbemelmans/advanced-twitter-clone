import React from 'react';
import logo from './logo.svg';
import '../public/twitter.css';
import './App.css';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Notification from './components/Notification.js';
import Notifications from './components/Notifications.js';


// import Other from './components/Other.js';


function App(){
   return (
    <div>
      <Header title='Your Title Here' />
          
        
        <div className='flex-grid'>
        <Profile />

        <Body />

         <Notifications /> 
        
      </div>
    </div>
    );
 }
export default App;
