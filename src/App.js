import React from 'react';
import './App.css';
import RoomList from './RoomList.js';
import MessageList from './MessageList.js';
import NewRoomForm from './NewRoomForm.js';
import SendMessage from './SendMessage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      textVal: '',
      messages: [
        {
          'name': 'anonymous',
          'message': 'Hey!'
        }
      ],
    });

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    if (e.which === 13 || e.keyCode === 13) {
        //code to execute here
        let input = e.target.value.trim();
        let messageCopy = this.state.messages.slice();
        messageCopy.push({
          'name': 'anonymous',
          'message': input
        });
        this.setState({
          textVal: '',
          messages: messageCopy
        });
    }
  }

  handleChange(e) {
    this.setState({
      textVal: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <RoomList
            className="RoomList"/>
          <MessageList
            className="MessageList"
            messages={this.state.messages}/>
        </div>
        <div className="row">
          <NewRoomForm
            className="NewRoomForm"/>
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
