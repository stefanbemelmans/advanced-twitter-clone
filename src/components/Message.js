import React from 'react';
// import Notifications from './Notifications.js';

// import renderNote from Notifications;

export default class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        value: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
     
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.value);
      this.props.newMsg(this.state.value);
      // this.setState({message:this.state.value})
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  