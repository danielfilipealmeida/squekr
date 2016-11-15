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
                        <ul className="nav navbar-nav">
                            <li><Link to='user'>User</Link></li>
                        </ul>
                    </div>
                </div>
                </nav>            
            </div>
            
            
        );
    }
}

export default Header;
