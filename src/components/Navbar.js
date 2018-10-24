import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="nav-wrapper blue darken-1">
            <div className="container">
                <a className="brand-logo">Post Mate</a>
                <ul className="right">
                    <li><NavLink to="/albums">Albums</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar