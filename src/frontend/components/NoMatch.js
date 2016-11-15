import React, { Component } from 'react';
import {Link} from 'react-router'; 


class NoMatch extends Component {
    render() {
        return (
            <div className="Header">
                <h2>Ops! you're looking into the void...</h2>
            </div>
        );
    }
}

export default NoMatch;
