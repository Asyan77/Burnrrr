import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src="https://identity.flickr.com/img/flickr_logo_dots.7670d27a.svg" alt="Flickr Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Photos, people, or groups" />
        {/* <button>Search</button> */}
      </div>
      <div className="user-actions">
        <Link to="/signIn" className="signin-btn">Log In</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default NavBar;
