import React from 'react';
import { NavLink } from 'react-router-dom';

function NewsCards({title, image, abstract,byline, id}) {

  return (
  <NavLink className='article-container'to={`/${id}`}> 
    <article className='' key={id} id={id}>
      <img src={image} /> 
      <h2> {title} </h2>
      {/* <p>{abstract}</p>
      <p>{byline}</p> */}
    </article>
  </NavLink>
  )
}

export default NewsCards
