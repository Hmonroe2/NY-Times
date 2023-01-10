import React from 'react'

function NewsCards({title, image, abstract}) {
  return (
    <article className='article-container'>
      <img src={image} /> 
      <h2> {title} </h2>
      <p>{ abstract}</p>
    </article>
  )
}

export default NewsCards
