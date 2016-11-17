import React, { Component } from 'react';


class ErrorMessage extends Component {

     constructor (props) {
        super(props);      
        this.state = {
            message: props.message,
        }
    }

    render() {
        return (
            <div className="ErrorMessage alert alert-danger" role="alert">
                <strong>Error:</strong> {this.state.message}
            </div>
        );
    }
}

export default ErrorMessage;
