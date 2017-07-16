import React, { Component } from 'react';
import logo from './logo.svg';
import '../public/twitter.css';
import './App.css';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Notification from './components/Notification.js';
// import Other from './components/Other.js';


function App(){
   return (
    <div>
      <Header title="Your Title Here" />
          
        
        <div className='flex-grid'>
        <Profile />

        <Body />
        <h3>Hello!</h3>  
      </div>
    </div>
    );
 }
export default App;
