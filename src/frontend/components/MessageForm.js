import React, { Component } from 'react';
import config from '../config';
import ErrorMessage from './ErrorMessage.js';
import axios from 'axios';

class MessageForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email: props.route.mainState.email,
            password: props.route.mainState.password,
            message: "",
            error_message: false
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * takes care of the changes made on the textarea and sync it with the component state
     */
    handleChange(event) {
        this.setState({message: event.target.value});
    }


    /**
     * Handles the call to the API to add a new message
     */
    handleSubmit(event) {
        let _this = this;
        let url = config.apiURL + "/messages/";
        
        // NOTE: no validation is made here, only in the API. this should be fixed.
        let dataSent = {
            email: _this.state.email,
            password: _this.state.password,
            message: _this.state.message
        };

        axios
            .post(url, dataSent)
            .then((result) => {
                if (
                    typeof result.data.error !== 'undefined' ||
                    result.data.success!==true
                ) throw( new Error(result.data.error));

                alert(result.data.message);
            })
            .catch((error) => {
                _this.setState({
                    message: "",
                    error_message: error.message
                }); 
            });

        event.preventDefault();
    }

    render() {
        return (
            <div className="MessageForm">
                {this.state.error_message ? <ErrorMessage message={this.state.error_message} /> : null}
               <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Your message... (max 200 chars.)" rows="5" onChange={this.handleChange} value={this.state.message}></textarea>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default MessageForm;
