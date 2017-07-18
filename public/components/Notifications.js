import React, { Component }  from 'react';
class Body extends React.Component  {
    constructor(props) {
        super();
    }
    render(){
    return(
        <div className="notification">
           <img src="https://placeholdit.co//i/50x50?&text=Picture" />
           <div className="message"><p>bloop bleep bzzzzzzzz</p>
           </div>
        </div>
        )
    }
}
export default Body;