import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <div className="nav-item"><NavLink className="nav-link" to='/'><li>Sign Up</li></NavLink></div>
                <div className="nav-item"><NavLink className="nav-link" to='/'><li>Login</li></NavLink></div>
                {
                    // would create here: loggedin ? logout div : login div
                }
                <div className="nav-item"><NavLink className="nav-link" to='/'><li>Logout</li></NavLink></div>
            </ul>
        </nav>
    )
}
 
// would create a nice little popup box for people to easily sign up or login without leaving the page they are on

export default Navbar