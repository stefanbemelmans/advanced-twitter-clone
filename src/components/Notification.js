import React from 'react';

export default class Notification extends React.Component{
    constructor(props){
				super();
				// this.setState({props:message})
                 }
    render(){
        return(
        	<div className="notification">
            <img src="https://placeholdit.co//i/50x50?&text=Picture" alt='logo'/>
            <div className="message"><p>{this.props.message}</p>
            </div>

        	</div>
        )   	  
      }
    }
