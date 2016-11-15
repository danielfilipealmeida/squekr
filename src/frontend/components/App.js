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
                <div className='container' id="mainContainer">
                    <div className='row'>
                        {this.props.children}
                    </div>
                </div>
                <Footer />
          </div>
        );
    }
}

export default App;
