import React from 'react'

function Details({ data }) {
  console.log(data)
  return (
    <div className='details-container'>
      <h3> {data.title}</h3>
      <img src={data.multimedia[1].url}/> 
    </div>
  )
}

export default Details
