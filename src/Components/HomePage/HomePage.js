import React from 'react';
import NewsCards from '../NewsCards/NewsCards';
import defaultImage from '../../Images/default-image.jpeg';

function HomePage({ articles, category }) {
  let data = articles;
  if (category.length > 0) {
    data = category;
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
            image={
              !article.multimedia ? defaultImage : article.multimedia[2].url
            }
            abstract={article.abstract}
            byline={article.byline}
            section={article.section}
          />
        );
      });
    }
  };
  return (
    <div>
      <p className="top-stories"> Today's Top Stories </p>
      <section className="article-card-container"> {displayNews()}</section>
    </div>
  );
}

export default HomePage;
