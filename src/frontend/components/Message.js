import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <li className="Message list-group-item">
                {this.state.data.message}
            </li>
        );
    }
}

export default Message;
