import React from 'react';
import NewsCards from '../NewsCards/NewsCards';
import Navbar from '../Navbar/Navbar';

function HomePage({ articles }) {





  const displayNews = () => {
    if (!articles) {
      return <p> loading... </p>;
    } else {
      return articles.map((article) => {
        console.log(article)
        return (
          <NewsCards
            key={article.short_url}
            id={article.short_url}
            title={article.title}
            image={article.multimedia[2].url}
            abstract={article.abstract}
            byline= {article.byline}
          />
        );
      });
    }
  }
    return (
      <div>
        <Navbar /> 
        <section className='article-card-container'> {displayNews()}</section>
      </div>
    );
  };

export default HomePage;
