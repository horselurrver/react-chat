import React, { Component } from 'react';

class NewRoomForm extends Component {
  render() {
    return (
      <div className="form">
        <p className="create-a-room">Create a room</p>
        <i className="fas fa-plus" onClick={this.props.makeroom}></i>
      </div>
    );
  }
}

export default NewRoomForm;
