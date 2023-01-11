import React from 'react'

function Details({ data }) {
  if (!data) {
    return <p> loading.. </p>
  }
  return (
    <div className='details-container'>
      <h3 className='detail-title'> {data.title}</h3>
      <p> {data.byline}</p>
      <img src={data.multimedia[1].url} alt={data.title } /> 
      <p> {data.abstract}</p>
      <a className="nytime-link" href={data.url}>View article on NY Times</a>
    </div>
  )
}

export default Details
