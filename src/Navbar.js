import React from 'react';

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
            <button>Sign Up/Sign In</button>
        </nav>
    );
}

export default Navbar;
