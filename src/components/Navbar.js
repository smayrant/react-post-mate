import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="nav-wrapper blue darken-1">
            <div className="container">
                <a className="brand-logo" href="/home">Post Mate</a>
                <ul className="right">
                    <li><NavLink to="/comments">Comments</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar