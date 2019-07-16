import React, { Component } from 'react';
import Message from './Message.js';

class MessageList extends Component {
  render() {
    return (
      <div className="message-panel">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

export default MessageList;
