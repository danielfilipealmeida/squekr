import React, { Component } from 'react';
import Message from './Message.js';
import ErrorMessage from './ErrorMessage.js';
import axios from 'axios';
import config from '../config'



class Messages extends Component {

    /** constructor - handles state initialization */
    constructor (props) {
        super(props);
        this.state = {
            email: props.email,
            messages: [],
            error_message: false
        };
    }

    /** run after load. fetch data from the API */
    componentDidMount() {   
        let _this = this;
        let url = config.apiURL + "/messages/" + this.state.email;
    
        _this.setState({error_message: false});

        axios
            .get(url)
            .then((result) => {
                if (typeof result.message !== 'undefined') throw (new Error(result.message));
                if (typeof result.data.error !== 'undefined') throw( new Error(result.data.error));

                _this.setState({messages: result.data.messages});
            })
            .catch((error) => {
                _this.setState({error_message: error.message}); 
            });
    }

    /** renders the component in the page */
    render() {
        return (
            <div className="Messages">
                {this.state.error_message ? <ErrorMessage message={this.state.error_message} /> : null}
                <ul className="list-group"> 
                    {this.state.messages.map(
                        (messageData) => {
                            return <Message data={messageData} key={messageData.key} />
                        }
                    )}
                </ul>
            </div>
        );
    }
}

export default Messages;
