import React, { Component } from 'react';
import Message from './Message.js'

class Messages extends Component {

    constructor (props) {
        super(props);
        this.state = {
            messages: [
                {
                    key: 1,
                    message: "this is a test message. message 1",
                    email: 'daniel@danielfilipea.net'
                },
                {
                    key: 2,
                    message: "another test message",
                    email: 'daniel@danielfilipea.net'
                }
            ]
        }
    }

  render() {
    return (
      <div className="Messages">
        <ul>
            {this.state.messages.map((messageData) => {return <Message data={messageData} />})}
        </ul>
      </div>
    );
  }
}

export default Messages;
