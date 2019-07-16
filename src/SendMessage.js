import React, { Component } from 'react';

class SendMessage extends Component {
  render() {
    return (
      <div className="send">
        <textarea placeholder="Type message & hit ENTER">
        </textarea>
      </div>
    );
  }
}

export default SendMessage;
