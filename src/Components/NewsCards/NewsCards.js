import React from 'react';
import { Link } from 'react-router-dom';

function NewsCards({title, image, abstract,byline, id}) {
  return (
  <Link className='article-container'to={id}> 
    <article className='' key={id} id={id}>
      <img src={image} /> 
      <h2> {title} </h2>
      {/* <p>{abstract}</p>
      <p>{byline}</p> */}
    </article>
  </Link>
  )
}

export default NewsCards
