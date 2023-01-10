import React from 'react';
import NewsCards from '../NewsCards/NewsCards';

function HomePage({ articles }) {
  const displayNews = () => {
    if (!articles) {
      return <p> loading... </p>;
    } else {
      return articles.map((article) => {
        return (
          <NewsCards
          title={'hello'}
          />
        );
      });
    }
  }
    return (
      <div>
        <h1> Hunter Times </h1> 
        <section className='article-card-container' > {displayNews()}</section>
      </div>
    );
  };

export default HomePage;
