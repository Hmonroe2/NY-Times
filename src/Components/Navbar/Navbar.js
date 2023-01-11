import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ filter, data }) {
  let today = new Date().toLocaleDateString();
  let buttonData = [...new Set(data)];

  const newButtons = () => {
    let data = buttonData.map((but, index) => {
      return (
        <button
          key={index}
          onClick={() => {
            filter(but);
          }}
          className="category-buttons">
          {' '}
          {but}{' '}
        </button>
      );
    })
    return data;
  };

  return (
    <div className="navbar-container">
      <a href="/">
        <h1> Hunter Times</h1>
      </a>
      <h2> {today}</h2>
      <div className="links">{newButtons()}</div>
    </div>
  );
}

export default Navbar;
