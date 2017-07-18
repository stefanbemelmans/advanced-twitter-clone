
import React, {Component} from 'react';
class Header extends React.Component{
    constructor(props){
        super();
    }
    render(){
      return(
        <div className="header">
            <div><h1>{props.title}</h1></div>
        </div>
        )
    }
}
export default Header;