import React from 'react';
import NewsCards from '../NewsCards/NewsCards';


function HomePage({ articles, category }) {
  let data = articles;
  if (category.length > 0) {
   data =  category
  } else {
    data = articles
 }

  const displayNews = () => {
    if (!data) {
      return <p> loading... </p>;
    } else {
      return data.map((article) => {
        return (
          <NewsCards
            key={article.short_url}
            id={article.id}
            title={article.title}
            image={article.multimedia[2].url}
            abstract={article.abstract}
            byline={article.byline}
          />
        );
      });
    }
  };
  return (
    <div>
      <section className="article-card-container"> {displayNews()}</section>
    </div>
  );
};

export default HomePage;
