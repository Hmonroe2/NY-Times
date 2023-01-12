import React from 'react'
import defaultImage from '../../Images/default-image.jpeg';

function Details({ data }) {
  if (!data) {
    return <p> loading.. </p>
  }
  return (
    <div className="details-container">
      <h3 className="detail-title"> {data.title}</h3>
      <p> {data.byline}</p>
      <img
        src={!data.multimedia ? defaultImage : data.multimedia[1].url}
        alt={data.title}
      />
      <p> {data.abstract}</p>
      <a className="nytime-link" href={data.url}>
        View Full Article On NY Times
      </a>
    </div>
  );
}

export default Details
