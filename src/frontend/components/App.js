import React, { Component } from 'react';
import '../../css/App.css';
import Messages from './Messages.js'
import MessageForm from './MessageForm.js'
import Header from './Header.js'
import Footer from './Footer.js'



class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loggedIn: false,
            email: "",
            password: ""
        }
    }
    
    render() {
        return (
            <div className="App">
                <Header />
                <MessageForm email={this.state.email} />
                <Messages />
                <Footer />
          </div>
        );
    }
}

export default App;
