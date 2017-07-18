import React from 'react';


export default class Profile extends React.Component{
    constructor(props){
        super();
    }
    render(){
    	return(
        <div className="profile">
            <h1>Name</h1>
            <img src="https://placeholdit.co//i/200x200?&text=Picture" alt='logo'/>
            <h3>Address</h3>
            <h3>Occupation</h3>
            <div className="profileLower">
                <p>some interesting information</p>
            </div>
        </div>
    
    )
}}
