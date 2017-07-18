
import React, { Component }  from 'react';
class Body extends React.Component  {
    constructor(props) {
        super();
        }
    render(){
    return(
      <div className="header">
      <h3>{props.name}</h3>
      </div>
    )
    }
};