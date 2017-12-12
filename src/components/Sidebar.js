import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/organisms'>View All Organisms</Link>
        </div>
    )
}
 
// would create a nice little popup box for people to easily sign up or login without leaving the page they are on

export default Sidebar