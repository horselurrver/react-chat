import React, { Component } from 'react';

class NewRoomForm extends Component {
  render() {
    return (
      <div className="form">
        <p className="create-a-room">Create a room</p>
        <i className="fas fa-plus" onClick={() => alert('MAKE A ROOM')}></i>
      </div>
    );
  }
}

export default NewRoomForm;
