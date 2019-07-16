import React from 'react';
import './App.css';
import RoomList from './RoomList.js';
import MessageList from './MessageList.js';
import NewRoomForm from './NewRoomForm.js';
import SendMessage from './SendMessage.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <RoomList className="RoomList"/>
          <MessageList className="MessageList"/>
        </div>
        <div className="row">
          <NewRoomForm className="NewRoomForm"/>
          <SendMessage className="SendMessage"/>
        </div>
      </div>
    );
  }
}

export default App;
