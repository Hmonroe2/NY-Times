import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-container'>
      <h1> Hunter Times</h1>
      <div className="links">
        <Link className="link-text" to="/">
          Home
        </Link>
        <Link className="link-text" to="/sports">
          Sports
        </Link>
        <Link className="link-text" to="e">
          World{' '}
        </Link>
        <Link className="link-text" to="e">
          Stuff
        </Link>
      </div>
    </div> 
  );
}

export default Navbar;