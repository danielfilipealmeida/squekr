import React, { Component } from 'react';
import config from '../config';
import ErrorMessage from './ErrorMessage.js';
import axios from 'axios';

class Login extends Component {

     constructor (props) {
        super(props);
        this.state = props.mainState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
     }


     /**
     * takes care of the changes made on the textarea and sync it with the component state.
     * NOTE: it's simple to make this code general and without a switch but I left it like this to
     * make it readable and understandable. There isn't much going on here that needs a shorter and less understandable version.
     */
    handleChange(event) {
        let newState = {};

        switch (event.target.id) {
            case 'email':
                newState.email = event.target.value;
                break;

            case 'password':
                //TODO: I should be encrypting the password here!
                newState.password = event.target.value;
                break;

            default:
                return;
        }
         
        this.setState(newState);
    }


    /**
     * Handles the call to the API to add a new message
     */
    handleSubmit(event) {
        let _this = this;

        // TODO: I should make a better API call that receives email and password glued and encrypted. Information is currently too visible
        let url = config.apiURL + "/users/check/" + this.state.email + "/" + this.state.password;
       
        axios
            .get(url)
            .then((result) => {
                if (!result.data.success) throw new Error ('Error validating user.');
                
                _this.props.onSetLogStatus(true, this.state.email, this.state.password);
                
            })
            .catch((error) => {
                _this.setState({
                    error_message: error.message
                }); 
            });

         event.preventDefault();
    }

     render() {
        return (
            <div className="Login">
                {this.state.error_message ? <ErrorMessage message={this.state.error_message} /> : null}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
     }

}



export default Login;
