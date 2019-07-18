import React from 'react';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import NewRoomForm from './components/NewRoomForm.js';
import SendMessage from './components/SendMessage.js';
import Chatkit from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      roomId: '21667002',
      textVal: '',
      messages: [],
      rooms: ['Announcements', 'Random'],
      roomVal: '',
    });

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.makeroom = this.makeroom.bind(this);
    this.updateRoomVal = this.updateRoomVal.bind(this);
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'amy wang',
        tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
    })
  });

  chatManager
  .connect()
  .then(currentUser => {
    this.currentUser = currentUser
    console.log("Connected as user ", currentUser);
    let messageList = [];
    currentUser.subscribeToRoomMultipart({
      roomId: currentUser.rooms[0].id,
      hooks: {
        onMessage: message => {
          // alert(message.parts[0].payload.content);
          console.log(JSON.stringify(message.senderId));
          console.log('\n\n')
          messageList.push({
            'name': message.senderId,
            'message': message.parts[0].payload.content
          });
          this.setState({
            messages: messageList
          })
        }
      }
    });
  })
  .catch(error => {
      console.error("error:", error);
    });
  }

  makeroom() {
    //let roomsCopy = this.state.rooms.slice();
    console.log('making room called ' + this.state.roomVal);
    // roomsCopy.push('Bob');
    // this.setState({
    //   rooms: roomsCopy
    // });
    let roomName = this.state.roomVal;
    if (roomName.length === 0) {
      alert('Room name is empty');
      return;
    }
    this.setState({
      roomVal: ''
    });


    this.currentUser.createRoom({
      name: roomName,
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log('error with createRoom: ', err))
  }

  submit(e) {
    if (e.which === 13 || e.keyCode === 13) {
        //code to execute here
        let input = e.target.value.trim();
        if (input.length === 0) {
          alert('Message box is empty');
          return;
        }
        let messageCopy = this.state.messages.slice();
        messageCopy.push({
          'name': 'anonymous',
          'message': input
        });
        this.setState({
          textVal: '',
          messages: messageCopy
        });
        this.currentUser.sendMessage({
            text: input,
            roomId: this.state.roomId,
        })
    }
  }

  handleChange(e) {
    this.setState({
      textVal: e.target.value,
    });
  }

  updateRoomVal(e) {
    this.setState({
      roomVal: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <RoomList
            className="RoomList"
            rooms={this.state.rooms}/>
          <MessageList
            className="MessageList"
            messages={this.state.messages}/>
        </div>
        <div className="row">
          <NewRoomForm
            className="NewRoomForm"
            makeroom={this.makeroom}
            roomVal={this.state.roomVal}
            updateRoomVal={this.updateRoomVal}
            />
          <SendMessage
            className="SendMessage"
            handleChange={this.handleChange}
            textVal={this.state.textVal}
            submit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default App;
