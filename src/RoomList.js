import React, { Component } from 'react';

class RoomList extends Component {
  render() {
    return (
      <div className="room-list">
        <div>
          <h3 className="your-rooms">Your rooms:</h3>
          <div className="all-rooms">
            <p># Soccer</p>
            <p># NBA</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomList;
