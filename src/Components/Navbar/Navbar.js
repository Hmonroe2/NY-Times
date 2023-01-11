import React from 'react';

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
    });
    return data;
  };

  return (
    <div className="navbar-container">
      <a href="/">
        <h1 className="page-title"> Hunter Times</h1>
      </a>
      <h2> Todays's Date</h2>
      <h2> {today}</h2>
      <div className="links">
        {newButtons()}
        <a href="/">
          <button className="category-buttons"> View all Stories</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
