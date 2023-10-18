import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="logo">Website Logo</div>
            <ul className="nav-links">
                <li>Open Jobs</li>
                <li>Search</li>
                <li>Events</li>
                <li>Contact Us</li>
            </ul>
            <Link to="/auth">Sign Up/Sign In</Link>
        </nav>
    );
}

export default Navbar;
