import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1> Hunter Times</h1>
      <Link to="/">
        Home
      </Link>
    
      <Link to="e">sports</Link>
      <Link to="e">world </Link>
      <Link to="e">stuff</Link>
    </div>
  );
}

export default Navbar;
