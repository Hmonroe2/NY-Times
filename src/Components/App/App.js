import './App.css';
import { getNewsData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Details from '../Details/Details';

function App() {
  const [article, setArticle] = useState([]);
  const [categorizedArticle, setCategorizedArticle] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getNewsData('home')
      .then((data) => {
        const addedID = data.results.map((result, index) => ({
          ...result,
          id: index++,
        }));
        setArticle(addedID);
      })
      .then((error) => {
        setError(error);
      });
  }, []);

  const filterResultsByCategory = (category) => {
    const specificCategory = article.filter((art) => {
      return art.section === category;
    });
    setCategorizedArticle(specificCategory);
  };

  const findArticle = (id) => {
    let newId = parseInt(id);
    let articleDetails = article.find((article) => {
      return article.id === newId;
    });
    return articleDetails;
  };

  const navbarButtons = () => {
    let buttonData = article.map((articles) => articles.section);
    return buttonData;
  };

  return (
    <section className="App">
      <Navbar filter={filterResultsByCategory} data={navbarButtons()}  />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage articles={article} category={categorizedArticle} />
          )}
        />
        <Route
          path="/:id"
          render={({ match }) => {
            return <Details data={findArticle(match.params.id)} />;
          }}
        />
      </Switch>
    </section>
  );
}

export default App;
