
import React from 'react';
import Message from './Message.js';

export default class Body extends React.Component {
    constructor(props) {
        super();
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
            <div>           </div>
        </div>);
    }
}   
