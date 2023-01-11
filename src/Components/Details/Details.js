import React from 'react'

function Details({ data }) {
  console.log(data)
  if (!data) {
    return <p> loading.. </p>
  }
  return (
    <div className='details-container'>
      <h3> {data.title}</h3>
      <p> {data.byline}</p>
      <img src={data.multimedia[1].url} /> 
      <p> {data.abstract}</p>
      <a href={data.url}>View article on NY Times</a>
    </div>
  )
}

export default Details
