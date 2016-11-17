import React, { Component } from 'react';
import {Link} from 'react-router'; 


class Header extends Component {
    render() {
        return (
            <div className="Header">
               <nav className="navbar navbar-inverse navbar-fixed-top" id="menuNav">   
                <div className="container">
                    <div className="navbar-header">
                        <Link to='#' className="navbar-brand">Squekr</Link>
                    </div>
                    
                    <div id="navbar" className="collapse navbar-collapse">
                        {this.props.loggedin ?
                        <ul className="nav navbar-nav">
                            <li><Link to='user'>User's Messages</Link></li>
                            <li><Link to='postMessage'>Post a Message</Link></li>
                            <li><a href="#" onClick={this.props.handeLogout}>Logout</a></li>
                        </ul> : null}

                    </div>
                </div>
                </nav>            
            </div>
            
            
        );
    }
}

export default Header;
