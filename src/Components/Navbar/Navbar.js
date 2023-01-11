import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ filter }) {
  let today = new Date().toLocaleDateString();

  return (
    <div className="navbar-container">
      <Link to='/'>
        <h1> Hunter Times</h1>
      </Link> 
      <h2> {today}</h2>
      <div className="links">
        <Link className="link-text" to="/">
          Home
        </Link>
        <button className="link-text">Sports</button>
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
