import React, { Component } from 'react';

class RoomList extends Component {
  render() {
    return (
      <div className="room-list">
        <div>
          <h3 className="your-rooms">Your rooms:</h3>
          <div className="all-rooms">
            {this.props.rooms.map((room, index) => {
              return (
                <div key={index}>
                  <p className="room-name roomLine">&nbsp;&nbsp;&nbsp;#{room.name}</p>
                  <i onClick={() => this.props.deleteRoom(room.id)} className="fas fa-trash fa-sm roomLine"></i>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RoomList;
