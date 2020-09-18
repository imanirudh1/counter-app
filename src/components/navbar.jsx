import React, { Component } from 'react'
class NavBar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    NavBar <span className="badge-pill badge-secondary">
                        {this.props.totalCount}
                    </span>
                </a>
            </nav>
         );
    }
}
 
export default NavBar;