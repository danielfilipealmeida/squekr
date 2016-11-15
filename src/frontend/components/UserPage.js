import React, { Component } from 'react';
import '../../css/App.css';
import Messages from './Messages.js'
import MessageForm from './MessageForm.js'
import Header from './Header.js'
import Footer from './Footer.js'



class UserPage extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div className="App">
                <Messages />
          </div>
        );
    }
}

export default UserPage;
