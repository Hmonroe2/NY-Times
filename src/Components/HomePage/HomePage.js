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
          title={article.title}
          />
        );
      });
    }
  }
    return (
      <div>
        <section className='article-card-container' > {displayNews()}</section>
      </div>
    );
  };

export default HomePage;
