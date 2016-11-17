import React, { Component } from 'react';
import '../../css/App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Login from './Login.js'
import Home from './Home.js'
import { browserHistory } from 'react-router'


class App extends Component {
    constructor (props) {
        super(props);
        this.state = props.route.mainState;

        this.onUpdateMainState = props.route.onUpdateMainState.bind(this);
        this.setLogStatus = this.setLogStatus.bind(this);
        this.handeLogout = this.handeLogout.bind(this);
    }
    

    setLogStatus(status, email, password)  {
        // validation
        if (typeof status !== 'boolean') return;

        let newState = {loggedin: status};
        if (typeof email !== 'undefined' && typeof email === 'string') newState.email = email;
        if (typeof password !== 'undefined' && typeof password === 'string') newState.password = password;
        
        this.setState(newState);
        sessionStorage.loggedin = this.state.loggedin;
        sessionStorage.email = this.state.email;
        sessionStorage.password = this.state.password;
        this.onUpdateMainState(this.state.email, this.state.password, this.state.loggedin)
    } 


    handeLogout() {
        this.setLogStatus(false);
        browserHistory.push('/')
    }


    render() {
         return (
            <div className="App">
                <Header loggedin={this.state.loggedin} handeLogout={this.handeLogout}/>
                
                <div className='container' id="mainContainer">
                    <div className='row'>

                        {!this.state.loggedin ? <Login mainState={this.state} onSetLogStatus={this.setLogStatus}/> : null }
                        
                        {(this.state.loggedin && this.props.location.pathname === '/') ? <Home /> : null}
                        
                        {this.props.children}
                    </div>
                </div>
                <Footer />
          </div>
        );
    }
}

export default App;
