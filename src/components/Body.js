
import React, { Component }  from 'react';
import Message from './Message.js';

// class Body extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render(){
    export function Body(props){ 
    return (
        <div className="body">
            <h1>All the cool Body stuff</h1>
            <h3>This cool thing Happened:</h3>
            <p> And we're gonna talk about it here</p>
            <p>Lorem Ipmsum and all that</p>
            <br />
            <img src="https://placeholdit.co//i/200x200?&text=Picture" alt="logo" />
            <div><Message />            </div>
        </div>);
    }   


export default Body;//need this and the import above to work in this format