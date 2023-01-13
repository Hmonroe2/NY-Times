import React from 'react';
import { NavLink } from 'react-router-dom';

function NewsCards({title, image, id, section}) {

  return (
  <NavLink className='article-container'to={`/${id}`}> 
      <article className='' key={id} id={id}>
        <p> {section.toUpperCase() }</p>
        <img src={image} alt={ title } /> 
      <h2 className='card-title'> {title} </h2>
    </article>
  </NavLink>
  )
}

export default NewsCards
