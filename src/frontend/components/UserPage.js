import React, { Component } from 'react';
import '../../css/App.css';
import Messages from './Messages.js'



class UserPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "daniel@danielfilipea.net"
        }
    }
    
    render() {
        return (
            <div className="App">
                <Messages email={this.state.email}/>
          </div>
        );
    }
}

export default UserPage;
