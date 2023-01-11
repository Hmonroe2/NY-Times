import React from 'react';
import { NavLink } from 'react-router-dom';

function NewsCards({title, image, id}) {

  return (
  <NavLink className='article-container'to={`/${id}`}> 
    <article className='' key={id} id={id}>
        <img src={image} alt={ title } /> 
      <h2> {title} </h2>
    </article>
  </NavLink>
  )
}

export default NewsCards
