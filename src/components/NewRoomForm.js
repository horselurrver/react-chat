import React, { Component } from 'react';

class NewRoomForm extends Component {
  render() {
    return (
      <div className="form">
        <input placeholder="Create a room" className="create-a-room"></input>
        <i className="fas fa-plus" onClick={this.props.makeroom}></i>
      </div>
    );
  }
}

export default NewRoomForm;
