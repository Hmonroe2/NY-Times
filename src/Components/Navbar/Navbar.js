import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ filter }) {
  let today = new Date().toLocaleDateString();

  return (
    <div className="navbar-container">
      <h1> Hunter Times</h1>
      <h2> {today}</h2>
      <div className="links">
        <button className="link-text">Home</button>
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
